# 🚔Tell 112

## Introduction 📍
**Tell112** is a full-stack emergency response web application designed to streamline reporting and managing emergencies. It enables users to report incidents, track responders in real-time, and receive instant updates. The platform features role-based access for admins, responders, and users, along with geolocation tracking and real-time notifications. Built with a mobile-first approach, it ensures seamless usability during critical situations.

## Project Type 👨‍💻
Full-stack Web app

## Deployed App 🌐
[https://tell112.vercel.app/](https://tell112.vercel.app/)  


## Directory Structure 📂
```
Tell 112
|   .gitignore
|   README.md
|   
+---.vscode
|       settings.json
|       
+---client
|   \---Tell112
|       |   .gitignore
|       |   eslint.config.js
|       |   index.html
|       |   package-lock.json
|       |   package.json
|       |   postcss.config.js
|       |   README.md
|       |   tailwind.config.js
|       |   vite.config.js
|       |   
|       +---public
|       |   |   logo.png
|       |   |   vite.svg
|       |   |   
|       |   \---logo
|       |           logo.txt
|       |           
|       \---src
|           |   App.css
|           |   App.jsx
|           |   index.css
|           |   main.jsx
|           |   
|           +---api
|           |       crimeReportApi.js
|           |       
|           +---app
|           |       store.js
|           |       
|           +---assets
|           |       logo.png
|           |       police.webp
|           |       police2.gif
|           |       react.svg
|           |       yellow.jpg
|           |       yellow2.jpg
|           |       yellowtape.jpg
|           |       
|           +---components
|           |       Footer.jsx
|           |       Mascot.jsx
|           |       Navbar.jsx
|           |       NotFound.jsx
|           |       
|           +---features
|           |   |   crimeReportSlice.js
|           |   |   
|           |   \---auth
|           |           authApi.js
|           |           authSlice.js
|           |           
|           +---loader
|           |       PoliceSirenLoader.jsx
|           |       Preloader.jsx
|           |       Preloader2.jsx
|           |       
|           +---pages
|           |       cases.js
|           |       CrimeReport.jsx
|           |       CrimeReportingComponent.jsx
|           |       Home.jsx
|           |       Login.jsx
|           |       ReportedCases.jsx
|           |       Signup.jsx
|           |       UserProfile.jsx
|           |       
|           \---reactbits
|                   ASCIIText .jsx
|                   ScrollVelocity.jsx
|                   SplashCursor.jsx
|                   
\---server
    |   package-lock.json
    |   package.json
    |   server.js
    |   
    +---config
    |       db.js
    |       
    +---controllers
    |       authController.js
    |       crimeReportController.js
    |       
    +---middleware
    |       authMiddleware.js
    |       uploadMiddleware.js
    |       
    +---models
    |       CrimeReport.js
    |       User.js
    |       
    \---routes
            authRoutes.js
            crimeReportRoutes.js

```



## Video Walkthrough of the Project 🎥
https://youtu.be/p6vo4MC416o?si=2dI-hATAFJZ45ekv


## Features ⚙️
- User Authentication: Secure login and signup for admins, responders, and users.
- Emergency Reporting: Users can quickly report emergencies with details and location.
- Role-Based Access: Separate dashboards for admins, responders, and users.
- Notifications: Instant alerts and updates for emergencies and response progress.



## Installation & Getting Started 💽
Follow these steps to install and run the project locally.

```bash
# Clone the repository
https://github.com/sumitmali180/Tell112
# Install dependencies
cd Tell112
npm install

# Start frontend
npm run dev

# Install backend dependencies
cd server
npm install

# Start backend
npm run dev
```

## Credentials 🧔‍♂️
Provide user credentials for authenticated pages.

```bash
Email: user@gmail.com
Password: Password@123
```

## APIs Used 🧩
-Created Backend server deployed on Render
[https://tell112.onrender.com](https://tell112.onrender.com/)  


## Technology Stack 🛠️
- **Frontend:** React.js, Tailwind CSS, Redux
- **Backend:** Node.js, Express, Mongoose
- **Database:** Mongo DB
- **Authentication:** JWT Auth

## Web-App Preview 🎨

### **Home Page**
![Home Page](https://i.ibb.co/qLcZQny2/Screenshot-2025-03-24-082901.png)

### **Login Page**
![Login Page](https://i.ibb.co/whMf9kVx/Screenshot-2025-03-24-082943.png)

### **Register Page**
![Register Page](https://i.ibb.co/Q3zkRYXn/Screenshot-2025-03-24-082917.png)

### **Cases Dashboard**
![Admin Dashboard](https://i.ibb.co/6RZRX7Yv/Screenshot-2025-03-24-083021.png)

### **Report Crime and Incident Report**
![Add Product Page](https://i.ibb.co/0VtKbFHj/Screenshot-2025-03-24-083007.png)

### **Footer**
![Footer](https://i.ibb.co/XGnZ2Lv/Screenshot-2025-03-24-083052.png)
