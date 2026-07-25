# 📝 MEAN Stack Todo List Application

A full-stack **Todo List Application** built using the **MEAN Stack (MongoDB, Express.js, Angular, and Node.js)**. This application allows users to create, view, update, and delete tasks while storing data in a MongoDB database.

---

## 🚀 Features

- ✅ Add new tasks
- 📋 View all tasks
- ✏️ Edit existing tasks
- 🗑️ Delete tasks
- ✔️ Mark tasks as completed
- 🔄 Real-time communication between frontend and backend
- 💾 MongoDB database integration
- 🌐 RESTful API using Express.js
- 📱 Responsive user interface

---

## 🛠️ Tech Stack

### Frontend
- Angular
- HTML5
- CSS3
- TypeScript

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

---

## 📂 Project Structure

```
Todo-App/
│
├── frontend/
│   ├── src/
│   ├── angular.json
│   ├── package.json
│   └── ...
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── server.js
│   ├── package.json
│   └── ...
│
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/todo-app.git
```

### 2. Navigate to the project

```bash
cd todo-app
```

### 3. Install backend dependencies

```bash
cd backend
npm install
```

### 4. Install frontend dependencies

```bash
cd ../frontend
npm install
```

---

## ▶️ Running the Application

### Start MongoDB

Make sure MongoDB is running on your system.

### Start Backend

```bash
cd backend
npm start
```

Server runs on:

```
http://localhost:3000
```

### Start Angular Frontend

```bash
cd frontend
ng serve
```

Application runs on:

```
http://localhost:4200
```

---

## 📡 REST API Endpoints

| Method | Endpoint | Description |
|----------|----------------|----------------|
| GET | /todos | Get all tasks |
| POST | /todos | Add a new task |
| PUT | /todos/:id | Update a task |
| DELETE | /todos/:id | Delete a task |

---

## 📸 Application Workflow

1. User enters a new task.
2. Angular sends a request to the Express API.
3. Express processes the request.
4. Mongoose stores or retrieves data from MongoDB.
5. Updated task list is returned to Angular.
6. UI updates automatically.

---

## 📦 Dependencies

### Frontend

- Angular
- Angular CLI
- RxJS
- TypeScript

### Backend

- Express.js
- Node.js
- Mongoose
- CORS
- Nodemon (Development)

---

## 🎯 Learning Outcomes

This project demonstrates:

- Full Stack Web Development
- CRUD Operations
- REST API Development
- Angular Components
- Express Routing
- MongoDB Integration
- Mongoose Models
- Client-Server Communication
- JSON Data Handling
- MVC Architecture Basics

---

## 🔮 Future Enhancements

- User Authentication (JWT)
- Login & Signup
- Task Categories
- Due Dates
- Task Priorities
- Dark Mode
- Search & Filter
- Pagination
- Drag & Drop Tasks
- Email Notifications

---

## 👨‍💻 Author

**Arpit Kumar**

- B.Tech CSE (Data Science)
- Lovely Professional University
- GitHub: https://github.com/your-username
- LinkedIn: https://linkedin.com/in/your-profile

---

## 📄 License

This project is developed for learning purposes and is open for educational use.
