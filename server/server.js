const express = require('express');
const mongoose = require('mongoose');
const FacUser = require('./models/userregmodel');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const XLSX = require('xlsx');

const app = express();

// Ensure the password is URL-encoded if it contains special characters
const encodedPassword = encodeURIComponent('Sath@projects123');
const dbURI = `mongodb+srv://SathwikUK:${encodedPassword}@projects.7zbjzgv.mongodb.net/projects?retryWrites=true&w=majority`;

mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database connection successful');
}).catch((err) => {
    console.error('Database connection error:', err.message);
});

app.use(express.json());
app.use(cors({ origin: "*" }));

// Multer storage configuration
const storage = multer.memoryStorage(); // Store files in memory (Buffer)
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 10 * 1024 * 1024, // Max file size 10MB
    }
});

let uploadedFileBuffer = '';

app.get('/', (req, res) => {
    return res.send('Hello world!');
});

app.post('/register', upload.single('profileImage'), async (req, res) => {
    try {
        const { fullname, email, mobile, branch, password, confirmPassword } = req.body;

        // Check if profileImage is uploaded
        if (!req.file) {
            return res.status(400).send("Profile image is mandatory");
        }

        const exist = await FacUser.findOne({ email });
        if (exist) {
            return res.status(400).send("User Already Registered");
        }
        if (password !== confirmPassword) {
            return res.status(403).send("Passwords do not match");
        }

        let newuser = new FacUser({
            fullname, email, mobile, branch, password, confirmPassword,
            profileImage: {
                data: req.file.buffer, // Store the image as Buffer
                contentType: req.file.mimetype // Content type of the image
            }
        });

        await newuser.save();
        return res.status(200).send('Registered Successfully');

    } catch (err) {
        console.log(err);
        return res.status(500).send("Server Error");
    }
});

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const exist = await FacUser.findOne({ email });
        if (!exist) {
            return res.status(400).send("No user found");
        }
        if (exist.password !== password) {
            return res.status(400).send("Invalid password");
        }
        let payload = {
            user: {
                id: exist.id,
                fullname: exist.fullname
            }
        };
        jwt.sign(payload, 'jwtPassword', { expiresIn: 360000000 }, (err, token) => {
            if (err) throw err;
            return res.json({ token, fullname: exist.fullname });
        });

    } catch (err) {
        console.log(err);
        return res.status(500).send("Server Error");
    }
});

app.get('/faculty', async (req, res) => {
    try {
        const facultyMembers = await FacUser.find({}, '-password -confirmPassword'); // Exclude sensitive fields
        res.json(facultyMembers);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

// Function to set column widths to fit the content
function autoFitColumns(worksheet) {
    const range = XLSX.utils.decode_range(worksheet['!ref']);
    const colWidths = [];

    for (let C = range.s.c; C <= range.e.c; ++C) {
        let maxWidth = 10;
        for (let R = range.s.r; R <= range.e.r; ++R) {
            const cellAddress = XLSX.utils.encode_cell({ c: C, r: R });
            const cell = worksheet[cellAddress];

            if (cell && cell.v) {
                const cellValue = cell.v.toString();
                maxWidth = Math.max(maxWidth, cellValue.length);
            }
        }
        colWidths.push({ wch: maxWidth });
    }

    worksheet['!cols'] = colWidths;
}

app.get('/generate-excel', async (req, res) => {
    try {
        const facultyMembers = await FacUser.find({}, 'fullname branch');
        const data = facultyMembers.map(faculty => ({
            Name: `${faculty.fullname} (${faculty.branch})`,
            Date: ''
        }));

        const worksheet = XLSX.utils.json_to_sheet(data);
        autoFitColumns(worksheet);

        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Faculty Data');

        const excelBuffer = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' });

        res.setHeader('Content-Disposition', 'attachment; filename=faculty_data.xlsx');
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.send(excelBuffer);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

app.post('/upload-excel', upload.single('file'), (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).send("File is required");
        }
        uploadedFileBuffer = req.file.buffer;
        res.send({ message: 'File uploaded successfully' });
    } catch (error) {
        res.status(500).send('Error uploading file');
    }
});

app.get('/search-faculty', async (req, res) => {
    try {
        const { query } = req.query;

        // Search for faculty names based on the query
        const faculty = await FacUser.find({ fullname: { $regex: query, $options: 'i' } });

        return res.json({ faculty });
    } catch (error) {
        console.log("Error fetching faculty suggestions", error.message);
        return res.status(500).send("Internal Server Error");
    }
});

// Extract dates from the uploaded Excel file
app.get('/get-dates', (req, res) => {
    if (!uploadedFileBuffer) {
        return res.status(400).send({ message: 'No file uploaded' });
    }

    const workbook = XLSX.read(uploadedFileBuffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });

    const dates = data[0].slice(2); // Skip the first two columns

    const convertedDates = dates.map(serial => {
        if (typeof serial === 'number') {
            const date = new Date((serial - 25569) * 86400 * 1000); // Convert Excel serial date to JS date
            return date.toISOString().split('T')[0]; // Convert to YYYY-MM-DD format
        } else {
            return serial; // If already in date format, keep as is
        }
    });

    res.send({ dates: convertedDates });
});

app.get('/get-users', (req, res) => {
    try {
        const { date } = req.query;

        if (!uploadedFileBuffer || !date) {
            return res.status(400).send({ message: 'Missing file or date' });
        }

        const workbook = XLSX.read(uploadedFileBuffer, { type: 'buffer' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });

        const dateIndex = data[0].findIndex(header => {
            if (typeof header === 'number') {
                const headerDate = new Date((header - 25569) * 86400 * 1000).toISOString().split('T')[0];
                return headerDate === date;
            } else {
                return header === date;
            }
        });

        if (dateIndex === -1) {
            return res.status(400).send({ message: 'Date not found' });
        }

        const users = data
            .filter((row, index) => index > 0 && row[dateIndex] === 1) // Skip the header row
            .map(row => ({ username: row[0] })); // Assume the username is in the first column

        res.send({ users });
    } catch (error) {
        console.error('Error in /get-users:', error.message);
        res.status(500).send({ message: 'Server Error', error: error.message });
    }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
