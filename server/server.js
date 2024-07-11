const express = require('express');
const mongoose = require('mongoose');
const FacUser = require('./models/userregmodel');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

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
    },
    fileFilter: (req, file, cb) => {
        const filetypes = /jpeg|jpg|png/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

        if (mimetype && extname) {
            return cb(null, true);
        } else {
            cb('Error: Images only (jpeg, jpg, png)');
        }
    }
});

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

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
