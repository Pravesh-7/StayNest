# StayNest

Welcome to **StayNest**, a full-stack modern booking application tailored for finding perfect hotel rooms and managing property listings securely and seamlessly. Built with a robust MERN (MongoDB, Express, React, Node.js) stack, this application leverages Clerk for scalable authentication, Cloudinary for asset delivery, and integrates best practices in error handling, security, and deployment.

## Features

- **Authentication:** Integrated with [Clerk](https://clerk.dev/) for robust, session-based user and owner authentication (featuring webhooks via Svix).
- **Hotel Owner Dashboard:** Hotel owners can effortlessly add, manage, and toggle availability for their room listings while viewing real-time booking statistics.
- **User Bookings:** Seamless browsing and booking of premium rooms and suites.
- **Global Error Handling:** Features robust centralized error handling middleware in the backend and axios interceptors on the frontend ensuring users only see relevant UI alerts.
- **Security First:** Includes `helmet` for security headers, strict dynamic `CORS` setup, and removes all stack-trace leaks for production readiness.
- **Responsive UI:** Built using TailwindCSS and React for dynamic real-time interfaces.

## Technology Stack

### Frontend (Client)
- React 19 + Vite
- TailwindCSS 4
- Axios (with global interceptors)
- React Hot Toast
- React Router DOM
- Clerk React SDK

### Backend (Server)
- Node.js & Express.js
- MongoDB & Mongoose
- Helmet (Security headers)
- CORS
- Clerk Express SDK (with Svix Webhooks)
- Cloudinary (Image hosting)
- Multer (File uploads)

## Prerequisites
- **Node.js** v18+
- **MongoDB** cluster (Atlas recommended)
- **Clerk** account for Authentication
- **Cloudinary** account for Image Hosting

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Pravesh-7/StayNest.git
cd StayNest
```

### 2. Environment Configuration

You must create `.env` files in both the `/client` and `/server` directories based on the provided `.env.example` templates.

**`server/.env`:**
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
CLERK_WEBHOOK_SECRET=your_clerk_webhook_secret
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
FRONTEND_URL=http://localhost:5173
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
CLOUDINARY_NAME=your_cloudinary_cloud_name
```

**`client/.env`:**
```env
VITE_BACKEND_URL=http://localhost:5000
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_CURRENCY=$
```

### 3. Installation

Install all dependencies using `npm`.

```bash
# Install Server Dependencies
cd server
npm install

# Install Client Dependencies
cd ../client
npm install
```

### 4. Running Locally

You can run both the frontend and backend servers concurrently.

**Start the Backend:**
```bash
cd server
npm run dev
```

**Start the Frontend:**
```bash
cd client
npm run dev
```

The application will typically be accessible at `http://localhost:5173`.

## Deployment Setup

This project has been pre-configured for modern deployment platforms.

### Vercel / Netlify (Frontend)
- Build command: `npm run build`
- Output directory: `dist`
- A `vercel.json` and Netlify `_redirects` file is included in the project out-of-the-box to handle SPA fallback routing.

### Render / Railway (Backend)
- Build command: `npm install`
- Start command: `npm start`
- Ensure all environment variables are loaded into your hosting provider dashboard before deployment.

## License

This project is open-source and available under the ISC License.
