<h1 align="center">
  SCHOOL MANAGEMENT SYSTEM
</h1>

<h3 align="center">
  A modern web-based platform to streamline school management, class organization, and communication.<br>
  Track attendance, assess performance, manage records, and connect students, teachers, and administrators seamlessly.
</h3>

<br>

---

## 📘 About

The **School Management System** is a full-stack web application designed to simplify and digitalize academic and administrative operations in schools.

The system supports **role-based access** for **Admins, Teachers, and Students**, enabling efficient management of classes, attendance, assessments, and communication — all in one secure platform.

This version of the project uses **Supabase** as the backend service, replacing MongoDB, to provide a more scalable, secure, and production-ready solution.

---

## ✨ Features

### 👥 User Roles
- **Admin**
- **Teacher**
- **Student**

Each role has its own permissions and dashboard.

---

### 🛠️ Admin Dashboard
- Add and manage students and teachers
- Create classes and subjects
- Manage user roles and access
- View system-wide data and reports

---

### 🧑‍🏫 Teacher Dashboard
- Take and manage class attendance
- Assign marks and provide feedback
- View student performance
- Communicate with students

---

### 👨‍🎓 Student Dashboard
- View attendance records
- Check results and feedback
- Track academic performance
- Access notices and announcements

---

### 📊 Performance & Visualization
- Interactive tables and charts
- Clear academic progress tracking
- Transparent assessment records

---

### 💬 Communication
- Direct communication between teachers and students
- Centralized announcements and notices

---

## 🧰 Technologies Used

### Frontend
- React.js
- Material UI
- Redux

### Backend
- Node.js
- Express.js

### Database & Auth
- **Supabase (PostgreSQL)**
- Supabase Authentication
- Row Level Security (RLS)

---

## 🔐 Authentication & Security

- Email/password authentication via Supabase
- Role-based access control (Admin / Teacher / Student)
- Secure database policies using Supabase Row Level Security

---

## 📦 Installation

### Clone the Repository
```sh
git clone https://github.com/YOUR_USERNAME/SCHOOL-MANAGEMENT-SYSTEM.git
cd SCHOOL-MANAGEMENT-SYSTEM
⚙️ Backend Setup
Open Terminal 1:

sh
Copy code
cd backend
npm install
Create a .env file inside the backend folder:

env
Copy code
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
Start the backend server:

sh
Copy code
npm run dev
Backend runs on:

arduino
Copy code
http://localhost:5000
🎨 Frontend Setup
Open Terminal 2:

sh
Copy code
cd frontend
npm install
Create a .env file inside the frontend folder:

env
Copy code
REACT_APP_SUPABASE_URL=your_supabase_project_url
REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key
Start the frontend:

sh
Copy code
npm start
Frontend runs on:

arduino
Copy code
http://localhost:3000
🧑‍💻 Database Structure (Supabase)
Authentication: Managed by Supabase Auth

Profiles Table: Stores user metadata such as:

Full name

Role (admin / teacher / student)

Class (for students)

Profiles are linked directly to authenticated users using UUIDs.

🚀 Deployment
Recommended Deployment Options
Backend: Render

Frontend: Netlify or Vercel

Database & Auth: Supabase

Supabase requires no separate database hosting or configuration.

⚠️ Notes for Contributors
This project no longer uses MongoDB

Any MongoDB-related code or environment variables are deprecated

All authentication and data storage are handled by Supabase

Ensure Supabase keys are kept private and never committed to GitHub

🌟 Final Notes
This project is designed to be:

Scalable

Secure

Easy to maintain

Suitable for real-world school environments
