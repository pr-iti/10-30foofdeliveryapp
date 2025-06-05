# 🍔 FoodieDash – Food Delivery Platform with Admin Panel

![License](https://img.shields.io/github/license/yourusername/foodiedash)
![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Build](https://img.shields.io/badge/build-passing-brightgreen)
![Issues](https://img.shields.io/github/issues/yourusername/foodiedash)

**FoodieDash** is a full-featured food delivery platform that connects customers with local restaurants and delivery agents. It includes a powerful admin panel to manage users, restaurants, orders, and analytics.

---

## 🚀 Features

### 👨‍🍳 User Features
- Browse and search for restaurants and dishes
- View restaurant menus and dish details
- Place and track food orders in real-time
- Secure user authentication and profile management
- Cart functionality and order history
- Payment integration (Stripe, PayPal, etc.)

### 📦 Admin Panel
- Dashboard with real-time analytics and sales reports
- Manage restaurants, menus, users, and delivery agents
- Approve/Reject restaurant registrations
- View and manage all orders
- Push notifications and email alerts

### 👨‍🍳 Restaurant Panel (Optional)
- Menu management (add, edit, remove dishes)
- View incoming orders and update status
- Sales and revenue analytics

---

## 🛠️ Tech Stack

> The platform is built using modern and scalable technologies:

### 🌐 Frontend
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)  
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)  
[![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)

### 🧠 Backend
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)  
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)

### 🗃️ Database
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)  
[![MySQL](https://img.shields.io/badge/MySQL-00758F?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)

### 🛠️ Admin Panel
[![React Admin](https://img.shields.io/badge/React_Admin-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://marmelab.com/react-admin/)  
🧰 Custom Dashboard UI

### ☁️ Hosting
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)  
[![Heroku](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)](https://www.heroku.com/)  
[![AWS](https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)](https://aws.amazon.com/)  
[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)

---

## 🧩 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/foodiedash.git
cd foodiedash
#Backend
cd backend
npm install

#Frontend
cd ../frontend
npm install

PORT=5000
DB_URI=mongodb://localhost:27017/foodiedash
JWT_SECRET=your_secret_key
PAYMENT_GATEWAY_KEY=your_payment_key

#Start backend
cd backend
npm run dev

#Start frontend
cd ../frontend
npm start

##project file structure
foodiedash/
│
├── frontend/         # React frontend
│   ├── public/
│   ├── src/
│   └── .env
│
├── backend/          # Node.js backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── .env
│
├── admin/            # Optional: admin panel UI
│
└── README.md
