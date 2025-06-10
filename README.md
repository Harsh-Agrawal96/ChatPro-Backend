#  ChatPro

A full-stack MERN production-ready chat application that is feature-rich real-time messaging application with modern UI and secure communication capabilities.
It support the concurrency for better interaction when multiple user are using ChatPro at the same time.

This repository is the backend part of the project, access the frontend part from [here](https://github.com/Harsh-Agrawal96/ChatPro-Frontend)

---

## 🚀 Live Demo

👉 [Visit the live API url](https://chatpro-backend.onrender.com)

---

## 🛠️ Tech Stack

| Layer        | Technology                     |
|--------------|------------------------------- |
| Frontend     | React, Vite, Material UI       |
| Backend      | Node.js, Express.js            |
| Database     | MongoDB, Mongoose              |
| Auth         | JWT, Bcrypt                    |
| Real-time    | Socket.IO                      |
| DevOps       | Git, Postman (API test)        |
| Deployment   | Vercel (UI) + Render (API)     |

---

## 📦 Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Harsh-Agrawal96/ChatPro-Backend.git
   ```

2. Install dependencies:
   ```bash
   cd ChatPro-Backend
   npm install
   ```

3. Set up environment variables:
   Back to root directory
   ```bash
   cd..
   ```
   Create a `.env` file in root directory and add the variable values which are present in .sample.env file.
   You can use the deployed frontend url of this project for CLIENT_URL key - url("https://chatpro-rosy.vercel.app")

---

## 📡 API

All the APIs that build in backend is in routes folder and you can access it from 👉[here](https://github.com/Harsh-Agrawal96/ChatPro-Backend/tree/main/routes)
- **user**: API which start with `user` and related to user interaction with project.
- **chat**: API which start with `chat` and they are related to chat interaction between users.
- **chat**: API which start with `admin` and these are specifically used for admin interaction with project.

---

## 📂 Folder Structure (Backend)

```
ChatPro-Backend/
├── constants/          # constants that used in codebase
├── controllers/        # The layer contains all backend logic execution
├── lib/                # contains verification code
├── middlewares/        # all middlewares
├── models/             # all database schema
├── routes/             # Routes used in project
├── seeders/            # code to generate databse entries
├── utils/              # Contains component code
├── package.json        # Dependencies for backend
├── .sample.env         # Variables that used in .env
├── .gitignore          # files or folder that were ignored
├──app.js               # Main server file
└── README.md           # Project documentation
```

---

## Show your support

Give a ⭐ if you like this website!