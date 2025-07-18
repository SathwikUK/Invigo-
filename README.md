<div align="center">
  <img src="./Screenshots/darkmode.png" alt="Invigo Logo" width="1200" />
</div>

<div align="center">
  
  # 🎓 INVIGO 🚀
  
  <h3>⚡ Smart Invigilation Management Platform ⚡</h3>
  
  <p align="center">
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
    <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
    <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
    <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
    <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" alt="JWT" />
  </p>
  
  <p align="center">
    <a href="https://invigo-seven.vercel.app/" target="_blank">
      <img src="https://img.shields.io/badge/🚀 Live Demo-FF6B35?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo" />
    </a>
    <a href="#installation">
      <img src="https://img.shields.io/badge/📚 Get Started-00D4AA?style=for-the-badge&logo=rocket&logoColor=white" alt="Get Started" />
    </a>
  </p>

</div>

---

## 🌟 **Overview**

**Invigo** is a comprehensive invigilation management system designed to streamline faculty allocation and exam supervision for educational institutions. The platform automates the complex process of assigning available faculty to examination rooms through intelligent Excel-based data processing, ensuring efficient resource utilization and seamless exam management.

---

## 🛠️ **Tech Stack**

<div align="center">
  
  ### 🔥 **Frontend**
  
  | Technology | Purpose | Badge |
  |------------|---------|-------|
  | **React** | UI Framework | ![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black) |
  | **Vite** | Build Tool | ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white) |
  | **CSS3** | Styling | ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) |
  | **Axios** | HTTP Client | ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat&logo=axios&logoColor=white) |
  
  ### ⚡ **Backend**
  
  | Technology | Purpose | Badge |
  |------------|---------|-------|
  | **Node.js** | Runtime Environment | ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white) |
  | **Express.js** | Web Framework | ![Express](https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white) |
  | **MongoDB** | Database | ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white) |
  | **JWT** | Authentication | ![JWT](https://img.shields.io/badge/JWT-000000?style=flat&logo=jsonwebtokens&logoColor=white) |
  
  ### 🔧 **Additional Tools**
  
  | Technology | Purpose | Badge |
  |------------|---------|-------|
  | **Excel.js** | Excel Processing | ![Excel](https://img.shields.io/badge/Excel.js-217346?style=flat&logo=microsoftexcel&logoColor=white) |
  | **PDFKit** | PDF Generation | ![PDF](https://img.shields.io/badge/PDFKit-DC382D?style=flat&logo=adobeacrobatreader&logoColor=white) |
  | **Multer** | File Upload | ![Multer](https://img.shields.io/badge/Multer-FF6B35?style=flat&logo=node.js&logoColor=white) |
  | **Bcrypt** | Password Hashing | ![Bcrypt](https://img.shields.io/badge/Bcrypt-00D4AA?style=flat&logo=shield&logoColor=white) |

</div>

---

## ✨ **Features**

### 🔐 **Authentication & Security**
- 🛡️ **JWT Authentication** - Secure token-based authentication
- 👥 **Role-Based Access** - Admin and Faculty user roles
- 🔒 **Password Encryption** - Bcrypt password hashing
- 🔄 **Session Management** - Automatic token refresh

### 📊 **Excel Integration**
- 📁 **Smart File Processing** - Excel to JSON conversion
- 🔍 **Data Validation** - Automatic error detection
- 📋 **Availability Tracking** - Faculty availability parsing
- 📈 **Room Capacity Management** - Intelligent room allocation

### 🎯 **Intelligent Allocation**
- 🤖 **Auto-Assignment** - AI-powered faculty allocation
- ⚖️ **Load Balancing** - Fair distribution of invigilation duties
- 🔄 **Conflict Resolution** - Automatic scheduling conflict detection
- ✏️ **Manual Override** - Administrative editing capabilities

### 📱 **User Interface**
- 🌙 **Dark Mode** - Modern dark theme interface
- 📱 **Responsive Design** - Works on all devices
- 🎨 **Intuitive Dashboard** - User-friendly navigation
- 🔔 **Real-time Updates** - Live notifications system

### 📄 **Document Management**
- 📊 **PDF Generation** - Automated allocation reports
- 📚 **Historical Records** - Past invigilation tracking
- 📢 **Announcement System** - Faculty communication
- 💾 **Data Export** - Multiple format support

---

## 🚀 **Installation & Setup** {#installation}

### 📋 **Prerequisites**
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn package manager

### 🔧 **Environment Setup**

1. **Clone the repository**
```bash
git clone https://github.com/SathwikUK/Invigo-
cd invigo
```


2. **Setup Backend**
```bash
cd server
npm install
```

3. **Setup Frontend**
```bash
cd client
npm install
```

4. **Environment Variables**

Create a `.env` file in the `server` directory:
```env
# Database Configuration
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/invigo?retryWrites=true&w=majority

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_here_make_it_long_and_complex

# Server Configuration
PORT=5000
NODE_ENV=development

# Frontend Configuration
FRONTEND_URL=http://localhost:3000

# File Upload Configuration
MAX_FILE_SIZE=10MB
ALLOWED_FILE_TYPES=.xlsx,.xls

# Email Configuration (Optional)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

### 🎬 **Running the Application**

**Development Mode:**
```bash
# Start backend server
cd server
npm start

# Start frontend (new terminal)
cd client
npm start
```

**Production Mode:**
```bash
# Build and start
npm run build
npm start
```

---

## 📁 **Project Structure**

```
invigo/
├── 📁 client/                          # Frontend React Application
│   ├── 📁 public/                      # Static assets
│   ├── 📁 src/                         # Source code
│   │   ├── 📁 api/                     # API integration
│   │   ├── 📁 components/              # React components
│   │   │   ├── 📄 Auth/                # Authentication components
│   │   │   ├── 📄 Dashboard/           # Dashboard components
│   │   │   ├── 📄 Faculty/             # Faculty management
│   │   │   └── 📄 Allocation/          # Allocation components
│   │   ├── 📁 img/                     # Image assets
│   │   ├── 📄 App.js                   # Main App component
│   │   ├── 📄 App.css                  # Global styles
│   │   ├── 📄 Context.js               # React context
│   │   └── 📄 index.js                 # Entry point
│   ├── 📄 package.json                 # Frontend dependencies
│   └── 📄 README.md                    # Frontend documentation
├── 📁 server/                          # Backend Node.js Application
│   ├── 📁 middleware/                  # Custom middleware
│   ├── 📁 models/                      # MongoDB models
│   │   ├── 📄 User.js                  # User model
│   │   ├── 📄 Faculty.js               # Faculty model
│   │   ├── 📄 Room.js                  # Room model
│   │   └── 📄 Allocation.js            # Allocation model
│   ├── 📄 index.js                     # Server entry point
│   ├── 📄 package.json                 # Backend dependencies
│   └── 📄 server.js                    # Express server config
├── 📄 .gitignore                       # Git ignore rules
├── 📄 README.md                        # Project documentation
└── 📄 package.json                     # Root dependencies
```

---

## 🎮 **Usage Guide**

### 🔑 **Getting Started**

1. **Register/Login**
   - Create admin account or login with existing credentials
   - Faculty can register with institutional email

2. **Upload Faculty Data**
   - Navigate to Allocation page
   - Upload Excel file with faculty availability
   - Select examination date

3. **Room Configuration**
   - Upload room capacity data
   - Configure room sizes and requirements
   - Set invigilation ratios (default: 1 invigilator per 24 students)

4. **Generate Allocation**
   - Review parsed data
   - Click "Allocate" to generate assignments
   - Preview allocation results

5. **Export & Distribute**
   - Generate PDF reports
   - Download allocation sheets
   - Share with faculty members

### 📊 **Excel File Format**

**Faculty Availability File ( sample overview ):**
```
| Faculty Name | Email | Department | Date1 | Date2 | Date3 |
|-------------|-------|------------|-------|-------|-------|
| John Doe    | john@edu.com | CSE | 1     |     0 |     1 |
| Jane Smith  | jane@edu.com | ECE | 1     |    1  |     0 |
```

**Room Data File:**
```
| Room No | Capacity | Building | Floor |
|---------|----------|----------|-------|
| 101     | 48       | A Block  | 1     |
| 102     | 24       | A Block  | 1     |
```

---

## 🖼️ **Screenshots**

<div align="center">
  
  ### 🏠 **Home & Authentication**
  
  <table>
    <tr>
      <td align="center">
        <img src="./Screenshots/home.png" alt="Home Page" width="400" />
        <br><strong>🏠 Home Page</strong>
      </td>
      <td align="center">
        <img src="./Screenshots/login.png" alt="Login Page" width="400" />
        <br><strong>🔐 Login Interface</strong>
      </td>
    </tr>
    <tr>
      <td align="center">
        <img src="./Screenshots/register.png" alt="Registration" width="400" />
        <br><strong>📝 Faculty Registration</strong>
      </td>
      <td align="center">
        <img src="./Screenshots/darkmode.png" alt="Dark Mode" width="400" />
        <br><strong>🌙 Dark Mode Theme</strong>
      </td>
    </tr>
  </table>
  
  ### 📊 **Dashboard & Management**
  
  <table>
    <tr>
      <td align="center">
        <img src="./Screenshots/dashboard.png" alt="Dashboard" width="400" />
        <br><strong>🎯 Admin Dashboard</strong>
      </td>
      <td align="center">
        <img src="./Screenshots/faculty details.png" alt="Faculty Details" width="400" />
        <br><strong>👥 Faculty Management</strong>
      </td>
    </tr>
    <tr>
      <td align="center">
        <img src="./Screenshots/allocation.png" alt="Allocation Page" width="400" />
        <br><strong>📋 Allocation Interface</strong>
      </td>
      <td align="center">
        <img src="./Screenshots/dateandfile.png" alt="Date and File" width="400" />
        <br><strong>📅 Date & File Selection</strong>
      </td>
    </tr>
  </table>
  
  ### ⚙️ **Allocation Process**
  
  <table>
    <tr>
      <td align="center">
        <img src="./Screenshots/detailsinfile.png" alt="File Details" width="400" />
        <br><strong>📄 File Processing</strong>
      </td>
      <td align="center">
        <img src="./Screenshots/roomsize.png" alt="Room Size" width="400" />
        <br><strong>🏢 Room Configuration</strong>
      </td>
    </tr>
    <tr>
      <td align="center">
        <img src="./Screenshots/allocate.png" alt="Allocate" width="400" />
        <br><strong>⚡ Allocation Generation</strong>
      </td>
      <td align="center">
        <img src="./Screenshots/preview.png" alt="Preview" width="400" />
        <br><strong>👀 Allocation Preview</strong>
      </td>
    </tr>
  </table>
  
  ### 📊 **Results & Management**
  
  <table>
    <tr>
      <td align="center">
        <img src="./Screenshots/editorgenerate.png" alt="Edit Generate" width="400" />
        <br><strong>✏️ Edit & Generate</strong>
      </td>
      <td align="center">
        <img src="./Screenshots/detailsgenerate.png" alt="Details Generate" width="400" />
        <br><strong>📋 Generation Details</strong>
      </td>
    </tr>
    <tr>
      <td align="center">
        <img src="./Screenshots/output.png" alt="Output" width="400" />
        <br><strong>📄 Final Output</strong>
      </td>
      <td align="center">
        <img src="./Screenshots/past.png" alt="Past Records" width="400" />
        <br><strong>📚 Historical Records</strong>
      </td>
    </tr>
  </table>
  
  ### 📢 **Communication & System**
  
  <table>
    <tr>
      <td align="center">
        <img src="./Screenshots/announ.png" alt="Announcements" width="400" />
        <br><strong>📢 Announcements</strong>
      </td>
      <td align="center">
        <img src="./Screenshots/logout.png" alt="Logout" width="400" />
        <br><strong>🔓 Logout Interface</strong>
      </td>
    </tr>
  </table>

</div>

---

## 🔄 **How It Works**

### 📈 **Allocation Algorithm**

```mermaid
graph TD
    A[📁 Upload Excel Files] --> B[🔍 Parse Faculty Data]
    B --> C[📊 Extract Availability]
    C --> D[🏢 Process Room Data]
    D --> E[⚖️ Calculate Requirements]
    E --> F[🎯 Generate Allocations]
    F --> G[🔍 Check Conflicts]
    G --> H{❓ Conflicts Found?}
    H -->|Yes| I[🔄 Resolve Conflicts]
    H -->|No| J[✅ Finalize Allocation]
    I --> G
    J --> K[📄 Generate Reports]
    K --> L[📧 Notify Faculty]
```

### 🎯 **Key Logic**
- **Availability Detection**: Parses Excel cells marked as "1" for available faculty
- **Room Matching**: Allocates invigilators based on room capacity (1 per 24 students)
- **Conflict Resolution**: Automatically detects and resolves scheduling conflicts
- **Load Balancing**: Distributes invigilation duties fairly among available faculty

---

## 🌐 **API Documentation**

### 🔐 **Authentication Endpoints**
```http
POST /api/auth/register    # Register new user
POST /api/auth/login       # User login
POST /api/auth/logout      # User logout
GET  /api/auth/verify      # Verify JWT token
```

### 👥 **Faculty Management**
```http
GET    /api/faculty        # Get all faculty
POST   /api/faculty        # Add new faculty
PUT    /api/faculty/:id    # Update faculty
DELETE /api/faculty/:id    # Delete faculty
```

### 📊 **Allocation Management**
```http
POST /api/allocation/upload     # Upload Excel files
POST /api/allocation/generate   # Generate allocation
GET  /api/allocation/history    # Get allocation history
PUT  /api/allocation/:id        # Update allocation
```

---

## 🔧 **Configuration**

### 📊 **Database Models**

**User Model:**
```javascript

  {
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    mobile: {
        type: String,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmPassword: {
        type: String,
        required: true
    },
    profileImage: {
        data: Buffer,
        contentType: String
    }
}

```

**Announcement Model:**
```javascript
{
  {
    title:String,
    description:String,
    date:String,
    file:String
},{
    timestamps: true
}
}
```

---

## 🤝 **Contributing**

We welcome contributions! Please follow these steps:

1. **Fork the Repository**
   ```bash
   git clone https://github.com/SathwikUK/Invigo-
   ```

2. **Create Feature Branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Commit Changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```

4. **Push to Branch**
   ```bash
   git push origin feature/amazing-feature
   ```

5. **Open Pull Request**
   - Describe your changes
   - Include screenshots if applicable
   - Add tests for new features

### 📝 **Code Style Guidelines**
- Use ESLint and Prettier
- Follow React best practices
- Write clear commit messages
- Add JSDoc comments for functions

---

## 🐛 **Troubleshooting**

### 🔧 **Common Issues**

**MongoDB Connection Error:**
```bash
# Check MongoDB URI in .env file
# Ensure MongoDB service is running
# Verify network connectivity
```

**JWT Token Invalid:**
```bash
# Clear browser localStorage
# Check JWT_SECRET in .env
# Verify token expiration
```

**Excel File Processing Error:**
```bash
# Check file format (.xlsx, .xls)
# Verify column headers
# Ensure proper data types
```

**Port Already in Use:**
```bash
# Change PORT in .env file
# Kill existing process: kill -9 $(lsof -ti:5000)
```

---

## 📫 **Contact & Support**

<div align="center">
  
  ### 🌟 **Get in Touch**
  
  <p>
    <a href="mailto:sathwiksampengala@gmail.com">
      <img src="https://img.shields.io/badge/Email-FF6B35?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
    </a>
    <a href="https://github.com/sathwikuk/">
      <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
    </a>
    <a href="https://linkedin.com/sathwikuk">
      <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
    </a>
  </p>
  
  ### 🚀 **Live Demo**
  
  <p>
    <a href="https://invigo-seven.vercel.app/" target="_blank">
      <img src="./Screenshots/darkmode.png" alt="Live Demo" />
    </a>
  </p>
  
  


<div align="center">
  

  
  ### 🌟 **Built with ❤️ by the Invigo Team**
  
  <p>
    <em>🎓 Transforming Education Management, One Allocation at a Time ⚡</em>
  </p>
  
  ### ⭐ **If you find this project helpful, please consider giving it a star!**

</div>

---

<div align="center">
  
  **Made with 🧡 for My College**
  
  
  
