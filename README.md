# 🍽️ Yummora – Multi-Vendor Restaurant Platform

<div align="center">

<!-- 🍔 GIF Preview -->
<img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZm1kYWJqOTdmeHdicm9kbnZodHpzZ2hiazR1NWttMGpyYzBjdTFoZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/sN1yciKb2qnKHvyosH/giphy.gif" width="500" alt="Yummora Demo"/>

---

<!-- 🔗 QR Code -->
### 📲 Scan to Try the App  
<img src="https://api.qrserver.com/v1/create-qr-code/?data=https://yummora-frontend.vercel.app/&size=150x150" width="150" alt="QR Code to Live App"/>

[🔗 Click here to open Yummora](https://yummora-frontend.vercel.app/)

---

<!-- ✨ Project Overview -->
<p align="center" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 1.2rem; color: #10B981; max-width: 600px; line-height: 1.6;">
  <strong>Yummora</strong> is a modern, full-stack food ordering platform inspired by Swiggy/Zomato, built using the <strong>MERN Stack</strong>.  
  It supports <strong>multiple vendors</strong> under a single restaurant firm, allowing them to add and manage products with ease.
  Experience a seamless and responsive UI, secure login, and real-time vendor-product interaction.
</p>

</div>

---

### 🚀 Features

🍴 **Yummora – A Multi-Vendor Food Ordering Platform**

* 🔐 **User & Vendor Authentication** – secure login and registration using **JWT tokens**
* 🏢 **Multi-Vendor Support** – vendors can register their firm (restaurant branch) and manage their own products
* 🧾 **Firm Management** – vendors can create and update firm information
* 🍽️ **Product Management** – vendors can add, view, and delete products (name, description, price, image)
* 🖼️ **Image Uploads** – product images uploaded using **Multer** and stored in the `/uploads` folder
* 🌐 **RESTful API Routes** – using **Express.js** for handling GET, POST, DELETE operations
* 🛡️ **JWT Token Verification Middleware** – to protect secured API endpoints (`verifyToken.js`)
* 📦 **MongoDB Atlas** – for cloud-hosted database with collections for Vendors, Firms, and Products
* 🔄 **Mongoose ODM** – for defining and interacting with schema models (`Vendor.js`, `Firm.js`, `Product.js`)
* 🧱 **Backend Folder Structure**:
  * `controllers/` – business logic (firmController, productController, vendorController)
  * `models/` – Mongoose schemas
  * `routes/` – modular Express route files
  * `middlewares/` – authentication middleware
  * `.env` – environment variables for `MONGO_URI`, `JWT_SECRET`
  * `.gitignore` – excludes `.env`, `node_modules`
* 🎨 **Frontend with React.js**:
  * Form pages: `Login`, `Register`, `AddFirm`, `AddProduct`
  * Dashboard components: `NaviBar`, `SideBar`, `Welcome`, `AllProducts`, `NotFound`
  * Pages managed using `react-router-dom` for seamless SPA routing
  * Centralized API configuration via `apiPath.js`
  * Loader UI with `react-loader-spinner`
  * Clean and responsive design built using **plain CSS**
* 🛠️ **Frontend Folder Structure**:
  * `vendorDashboard/components` – UI components
  * `vendorDashboard/forms` – authentication and firm/product forms
  * `vendorDashboard/pages` – landing page and routing structure

---

## 🏗️ Tech Stack

| Technology               | Description                                             |
|--------------------------|---------------------------------------------------------|
| 🟩 Node.js + Express     | Backend runtime & web framework                         |
| 🍃 MongoDB + Mongoose     | NoSQL database + ODM for schema modeling                |
| 🧱 MVC Architecture       | Backend structured into Models, Controllers, and Routes |
| 🔐 JSON Web Token (JWT)  | Secure authentication with signed tokens                |
| 🔄 Multer                | Middleware for handling file uploads (images, etc.)     |
| 🔐 bcryptjs              | Password hashing for user security                      |
| 🌐 CORS                  | Handles cross-origin requests securely                  |
| 📦 dotenv                | Environment variable management via `.env`              |
| 🔁 Nodemon               | Automatically restarts server during development        |
| 🧪 Body-Parser           | Parses incoming JSON/form data                          |
| 🎨 React.js               | Frontend library for building UI                       |
| 🧭 React Router DOM       | Routing for single-page application                    |
| ⏳ React Loader Spinner   | Loading indicators while data is fetched               |
| 🧠 React Hooks            | `useState`, `useEffect`, `useRef` for managing logic   |
| 🌐 API Integration        | Uses `fetch()` and `apiPath.js` for backend requests   |
| 🚀 **[Render](https://render.com/)**         | Backend deployment for Apis                |
| 🚀 **[Vercel](https://vercel.com/)**         | Frontend hosting and deployment            |

---

## 📄 License
This project is currently unlicensed.  
Feel free to contact me for any questions regarding usage or contributions.

---

## 🤝 Contributing
Contributions are welcome! Please open issues or pull requests for improvements or bug fixes.

---

## 📬 Contact

<p align="center">
  Created by <strong>Harshavardhan Sai Divvala</strong> — <br/><br/>
  <a href="https://www.linkedin.com/in/d-harshavardhan-sai" target="_blank">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" width="30" style="margin-right:10px;" />
  </a>
  <a href="https://www.instagram.com/ha_darling_ha?igsh=djhlbWp4Y2p2aTU5" target="_blank">
    <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" width="30" />
  </a>
</p>

<p align="center">
  — feel free to reach out!
</p>

 ---

## 📸 Screenshots
### 📝 1. UI Design
<img src="https://github.com/user-attachments/assets/065e8550-07d7-46b1-9c60-40ac371a73c2" width="400"/>

---

### ⚠️ 2. Vendor Registration Form
<img src="https://github.com/user-attachments/assets/c7835d2d-9f54-4673-9d6c-d4fc16f1759d" width="400"/>

---

### 🔒 3. MongoDB database (Nos before registration)
<img src="https://github.com/user-attachments/assets/89e3f014-7d29-47b0-b3ba-36f22f291b6c" width="400"/>

---

### 🔑 4. Registration Process
<img src="https://github.com/user-attachments/assets/cca6ac63-bbb9-4be5-9a58-6fe96bf5bef7" width="400"/>

---

### 🔐 5. Reagistration Loader
<img src="https://github.com/user-attachments/assets/d21e52ec-436c-402b-8bd7-8152c00c20b8" width="400"/>

---

### ❌ 6. Registration Success Alert
<img src="https://github.com/user-attachments/assets/75daa29d-3ed7-48f6-9dd8-50a7f2b375ab" width="400"/>

---

### ✅ 7. Login Token Not Found before login
<img src="https://github.com/user-attachments/assets/f861bc39-d92d-480b-a221-8cce169fa801" width="400"/>

---

### 📲 8. Vendor Login Form
<img src="https://github.com/user-attachments/assets/744c8c3e-ce10-48fa-b86f-940388c91be1" width="400"/>

---

### 📋 9. Vendor Login Process
<img src="https://github.com/user-attachments/assets/021ed682-9ad2-4909-98f2-8724134a6c5f" width="400"/>

---

### 💬 10. Login Loader
<img src="https://github.com/user-attachments/assets/1d477745-47a4-4dbe-82f8-b41f86610a48" width="400"/>

---

### 🟢 11. Login Success Alert
<img src="https://github.com/user-attachments/assets/6a498b9b-c32f-41f5-8e05-d261575f4e39" width="400"/>

---

### ⏰ 12. Dashboard After Login (Observer Logout Button)
<img src="https://github.com/user-attachments/assets/116fae27-5954-4d34-91ab-36daead53f80" width="400"/>

---

### 🔍 13. Login Token Found After Successfull Login
<img src="https://github.com/user-attachments/assets/b36b7017-c510-434c-afde-570ed2a0e342" width="400"/>

---

### 🚪 14. Add Firm Form 
<img src="https://github.com/user-attachments/assets/ae174604-9b2d-499c-bb51-7114c6f9f2e3" width="400"/>

---

### 🎨 15. Add Firm Process
<img src="https://github.com/user-attachments/assets/f86a7645-7645-4720-a308-84736b74cb1e" width="400"/>

---

### 🗃️ 16. Add Firm Loader
<img src="https://github.com/user-attachments/assets/792c95e3-bb32-4f94-b486-13cf5896b927" width="400"/>

---

### 👥 17. Add Firm Successfull Alert
<img src="https://github.com/user-attachments/assets/07dc8940-6c98-44e5-8d4a-1051bdaf0ec1" width="400"/>

---

### 💬 18. Undefined FirmId, FirmName, LoginToken found after Login with Firm Since Immediate Add Firm after Login
<img src="https://github.com/user-attachments/assets/95245048-3ae1-4794-98f7-01cfe3cd3dd7" width="400"/>

---

### 🧵 19. Undefined Login Since Immediate Add Firm after Login
<img src="https://github.com/user-attachments/assets/0714c80c-e8da-480e-80a7-85e8ee9a4d48" width="400"/>

---

### 📊 20. Logout Confirm
<img src="https://github.com/user-attachments/assets/38041453-f584-42f1-a8e3-b6f40321189e" width="400"/>

---

### 🚀 21. FirmId, FirmName, LoginToken deleted after Logout 
<img src="https://github.com/user-attachments/assets/ad7ee507-d1d7-4a3f-9b11-17abf807e394" width="400"/>

---

### 📜 22. MongoDB database (Nos after registration)
<img src="https://github.com/user-attachments/assets/0a11df89-352e-4bfa-987b-dbaabaa7cdf3" width="400"/>

---

### 📈 23. vendors Collection
<img src="https://github.com/user-attachments/assets/4271a91b-8964-4898-937a-bdf5908c52fe" width="400"/>

---

### ⚙️ 24. firms Collection
<img src="https://github.com/user-attachments/assets/c1efaf4a-15d2-4b18-9629-fce831764370" width="400"/>

---

### 💬 25. Successfull Login with Firmname Since firm add earlier
<img src="https://github.com/user-attachments/assets/b7de79a2-edd0-40fd-ac22-3cf2a168bdf0" width="400"/>

---

### 🧵 26. Add Product Form
<img src="https://github.com/user-attachments/assets/ac2a8655-b15a-408c-9a09-4ebeef71b924" width="400"/>

---

### 📊 27. Add Product Process
<img src="https://github.com/user-attachments/assets/2865777b-e24d-4280-909d-180e4c9664cb" width="400"/>

---

### 🚀 28. Add Product Loader
<img src="https://github.com/user-attachments/assets/a3a49fa6-0f96-4215-8775-d0e244170d19" width="400"/>

---

### 📜 29. Add Product Success Alert
<img src="https://github.com/user-attachments/assets/90ec7330-2a2b-4345-aee8-ce0ee63fb879" width="400"/>

---

### 📈 30. All Products
<img src="https://github.com/user-attachments/assets/0c059193-d65e-4a91-a74d-d80980a2432c" width="400"/>

---

### ⚙️ 31. FirmId, FirmName, LoginToken found Since firm add earlier
<img src="https://github.com/user-attachments/assets/d2e5120d-3805-4b57-a1a7-540dbe6d9297" width="400"/>

---

### 📝 32. MongoDB database (Nos after adding product)
<img src="https://github.com/user-attachments/assets/f5158ae2-8e69-4c70-b486-4f829dbe50ed" width="400"/>

---

### ⚠️ 33. products Collection
<img src="https://github.com/user-attachments/assets/8432f582-0978-4392-8526-29465176852c" width="400"/>

---

### 🔒 34. Delete Confirm
<img src="https://github.com/user-attachments/assets/4ac31573-32e7-4076-bcc7-17ec35bfa2ff" width="400"/>

---

### 🔑 35. Successfull Delete Alert
<img src="https://github.com/user-attachments/assets/dd423757-111b-40b3-ac33-02d4c54da856" width="400"/>

---

### 🔐 36. Render Deployment Status of Yummora-backend (Backend API) 
<img src="https://github.com/user-attachments/assets/21b2b810-d537-4397-bfb4-661934aea36b" width="400"/>

---

### ❌ 37. Logs
<img src="https://github.com/user-attachments/assets/93d571e6-d043-4214-9787-f8bc9203ba43" width="400"/>

---

### ✅ 38. Metrics
<img src="https://github.com/user-attachments/assets/6b7791bf-a957-4181-9768-44c1eed99f2e" width="400"/>

---

### 📲 39. Environmental Variables
<img src="https://github.com/user-attachments/assets/8f3d2da6-edc6-43b0-8c85-9e650c6f38fd" width="400"/>

---

### 📋 40. Vercel Deployment Status of Yummora-frontend (Full Stack) (Render + Frontend)
<img src="https://github.com/user-attachments/assets/814faf12-3296-4554-a9e0-0384aa949a21" width="400"/>

---

## ⚡ Quick Start

Follow these steps to run the project locally:

---
### 🔧 Frontend + Backend

```bash
### 🔧 Backend Setup (Express + MongoDB)

# 1. Clone the Backend Repository
git clone https://github.com/d-harshavardhan-sai/yummora-backend.git
cd todolistapp_backend

# 2. Install Backend Dependencies
npm install

# 3. Create a .env file in the root and add your MongoDB URI and PORT
# Example:
# MONGO_URI=your_mongodb_atlas_connection_string
# PORT=4000

# 4. Start the Backend Server
npm start

### 🔧 frontend Setup (React)

# 1. Open a new terminal and clone the Frontend Repository
git clone https://github.com/d-harshavardhan-sai/yummora-frontend.git
cd todolistapp_frontend

# 2. Install Frontend Dependencies
npm install

# 3. Start the React Development Server
npm run dev

# 4. Open `http://localhost:5173/` in your browser

---


## 📁 Folder Structure

```bash
YUMMORA/
├── backend/                    # 🧠 Backend - Node.js + Express API
│   ├── controllers/            # 🎛️ Controllers for business logic
│   │   ├── firmController.js
│   │   ├── productController.js
│   │   └── vendorController.js
│   ├── middlewares/            # 🛡️ Middleware for token verification
│   │   └── verifyToken.js
│   ├── models/                 # 🧾 Mongoose models
│   │   ├── Firm.js
│   │   ├── Product.js
│   │   └── Vendor.js
│   ├── routes/                 # 🚦 API route definitions
│   │   ├── firmRoutes.js
│   │   ├── productRoutes.js
│   │   └── vendorRoutes.js
│   ├── uploads/                # 📁 Uploaded images storage
│   ├── .env                   # 🔐 Environment variables (MONGO_URI, JWT_SECRET)
│   ├── .gitignore             # 🚫 Ignored files (.env, node_modules)
│   ├── index.js               # 🚀 Backend server entry point
│   └── package.json           # 📦 Backend dependencies and scripts

├── frontend/                   # 🎨 Frontend - React App
│   ├── src/                   # 🧩 Source files
│   │   ├── vendorDashboard/   # 🛠️ Vendor dashboard components and pages
│   │   │   ├── components/    # 🧱 Reusable UI components
│   │   │   │   ├── AllProducts.jsx
│   │   │   │   ├── NaviBar.jsx
│   │   │   │   ├── NotFound.jsx
│   │   │   │   ├── SideBar.jsx
│   │   │   │   └── Welcome.jsx
│   │   │   ├── data/          # 🌐 API endpoint configuration
│   │   │   │   └── apiPath.js
│   │   │   └── forms/         # 📝 Forms for adding, login, register
│   │   │       ├── AddFirm.jsx
│   │   │       ├── AddProduct.jsx
│   │   │       ├── Login.jsx
│   │   │       ├── Register.jsx
│   │   │       └── (others)
│   │   ├── pages/             # 📄 Main pages
│   │   │   └── LandingPage.jsx
│   │   ├── App.css            # 🎨 Global styles
│   │   ├── App.jsx            # 💻 Root React component
│   │   └── main.jsx           # 🛠️ React DOM render entry
│   ├── .gitignore             # 🚫 Ignored files for frontend
│   ├── index.html             # 🧾 HTML template
│   └── package.json           # 📦 Frontend dependencies and scripts
