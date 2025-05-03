## 💬 Chat App – Backend (Node.js + Socket.IO)
This is the backend server for the real-time Chat Application, built using Node.js, Express, and Socket.IO. It supports user authentication, room-based messaging, and real-time communication over WebSockets.

## ✨ Features
🔐 User registration and login with JWT

🧑‍🤝‍🧑 Room-based real-time chat using Socket.IO

👥 Track online users

💬 Message history saved in MongoDB

📡 Emit/receive events like join room, leave room, new message, etc.

## 🧰 Tech Stack
Server Framework: Express.js

Database: MongoDB (Mongoose)

Authentication: JWT (JSON Web Tokens)

WebSocket: Socket.IO

Environment Management: dotenv

Password Hashing: bcrypt

## 📁 Folder Structure

chat-app-backend/
├── controllers/        # Auth and chat controllers
├── models/             # Mongoose schemas
├── routes/             # API endpoints
├── socket/             # Socket.IO event handlers
├── middleware/         # Auth middleware
├── utils/              # Helper functions
├── .env
├── server.js
└── package.json

## 🔐 Environment Variables (.env)

PORT=5000
MONGO_URI=mongodb://localhost:27017/chatapp
JWT_SECRET=your_jwt_secret_key
🚀 Getting Started
1. Clone the Repository
git clone https://github.com/yourusername/chat-app-backend.git
cd chat-app-backend
2. Install Dependencies
npm install
3. Start the Server
node server.js
Server runs on:
🌐 http://localhost:5000

## 🔌 Socket.IO Events

Server Listens To:
joinRoom

leaveRoom

sendMessage

Server Emits:
message

userJoined

userLeft

onlineUsers
