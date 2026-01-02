# Deployment Guide - Divine Providence School Management System

This guide will help you deploy the MERN School Management System to the internet.

## Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account (for cloud database) or MongoDB installed locally
- Git account
- Accounts on deployment platforms:
  - **Backend**: Render, Heroku, or Railway
  - **Frontend**: Netlify or Vercel

## Step 1: Backend Deployment

### Option A: Deploy to Render (Recommended)

1. **Create a Render Account**
   - Go to [render.com](https://render.com)
   - Sign up for a free account

2. **Create a New Web Service**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Select the `backend` folder as the root directory

3. **Configure Environment Variables**
   - Go to Environment tab
   - Add the following variables:
     ```
     MONGO_URL=your_mongodb_atlas_connection_string
     PORT=10000
     NODE_ENV=production
     FRONTEND_URL=https://your-frontend-url.netlify.app
     ```

4. **Build & Deploy Settings**
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Environment: Node

5. **Deploy**
   - Click "Create Web Service"
   - Wait for deployment to complete
   - Copy your backend URL (e.g., `https://your-app.onrender.com`)

### Option B: Deploy to Heroku

1. Install Heroku CLI and login
2. Navigate to backend folder:
   ```bash
   cd backend
   ```
3. Create Heroku app:
   ```bash
   heroku create your-app-name
   ```
4. Set environment variables:
   ```bash
   heroku config:set MONGO_URL=your_mongodb_atlas_connection_string
   heroku config:set NODE_ENV=production
   heroku config:set FRONTEND_URL=https://your-frontend-url.netlify.app
   ```
5. Deploy:
   ```bash
   git push heroku main
   ```

## Step 2: Frontend Deployment

### Deploy to Netlify

1. **Create a Netlify Account**
   - Go to [netlify.com](https://netlify.com)
   - Sign up for a free account

2. **Create a New Site**
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - Select the `frontend` folder as the base directory

3. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `build`
   - Base directory: `frontend`

4. **Environment Variables**
   - Go to Site settings → Environment variables
   - Add:
     ```
     REACT_APP_BASE_URL=https://your-backend-url.onrender.com
     ```
     (Replace with your actual backend URL)

5. **Deploy**
   - Click "Deploy site"
   - Wait for deployment
   - Your site will be available at `https://your-app.netlify.app`

### Deploy to Vercel

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```
2. Navigate to frontend folder:
   ```bash
   cd frontend
   ```
3. Deploy:
   ```bash
   vercel
   ```
4. Set environment variable:
   ```bash
   vercel env add REACT_APP_BASE_URL
   ```
   Enter your backend URL when prompted

## Step 3: MongoDB Atlas Setup

1. **Create MongoDB Atlas Account**
   - Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
   - Sign up for free tier

2. **Create a Cluster**
   - Choose free tier (M0)
   - Select your preferred region
   - Create cluster

3. **Database Access**
   - Go to Database Access
   - Create a database user
   - Set username and password (save these!)

4. **Network Access**
   - Go to Network Access
   - Click "Add IP Address"
   - Click "Allow Access from Anywhere" (for production)
   - Or add specific IPs for security

5. **Get Connection String**
   - Go to Clusters → Connect
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database user password
   - Replace `<dbname>` with `school` or your preferred database name
   - Example: `mongodb+srv://username:password@cluster.mongodb.net/school`

## Step 4: Environment Variables Summary

### Backend (.env)
```env
MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/school
PORT=10000
NODE_ENV=production
FRONTEND_URL=https://your-frontend-url.netlify.app
```

### Frontend (.env)
```env
REACT_APP_BASE_URL=https://your-backend-url.onrender.com
```

## Step 5: Testing Deployment

1. **Test Backend**
   - Visit: `https://your-backend-url.onrender.com`
   - Should see: `{"message":"Route not found"}` (this is expected for root route)

2. **Test Frontend**
   - Visit: `https://your-frontend-url.netlify.app`
   - Try to register a new admin account
   - Try to login

3. **Common Issues**
   - **CORS Error**: Make sure `FRONTEND_URL` in backend matches your frontend URL
   - **Connection Error**: Check MongoDB Atlas network access settings
   - **Environment Variables**: Ensure all variables are set correctly

## Step 6: Post-Deployment

1. **Update README.md** with your deployed URLs
2. **Test all features**:
   - Admin registration
   - Student/Teacher registration
   - Class creation
   - Subject creation
   - Attendance tracking
   - Exam marks

## Security Recommendations

1. **MongoDB Atlas**:
   - Use strong passwords
   - Restrict IP access if possible
   - Enable MongoDB Atlas authentication

2. **Environment Variables**:
   - Never commit `.env` files to Git
   - Use secure environment variable management

3. **HTTPS**:
   - Both Netlify and Render provide HTTPS by default
   - Ensure all API calls use HTTPS

## Troubleshooting

### Backend won't start
- Check MongoDB connection string
- Verify all environment variables are set
- Check Render/Heroku logs

### Frontend can't connect to backend
- Verify `REACT_APP_BASE_URL` is set correctly
- Check CORS settings in backend
- Ensure backend is deployed and running

### Database connection issues
- Verify MongoDB Atlas network access
- Check connection string format
- Ensure database user has proper permissions

## Support

For issues or questions, check:
- Render documentation: https://render.com/docs
- Netlify documentation: https://docs.netlify.com
- MongoDB Atlas documentation: https://docs.atlas.mongodb.com

---

**Note**: Free tiers on Render may spin down after inactivity. Consider upgrading for production use.

