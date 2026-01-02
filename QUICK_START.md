# Quick Start Guide - Divine Providence School Management System

## Local Development Setup

### Backend Setup

1. **Navigate to backend folder:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create `.env` file:**
   ```bash
   # Copy the example file
   # Create .env file with:
   MONGO_URL=mongodb://127.0.0.1/school
   PORT=5000
   NODE_ENV=development
   FRONTEND_URL=http://localhost:3000
   ```

4. **Start the server:**
   ```bash
   npm run dev
   ```
   Server will run on `http://localhost:5000`

### Frontend Setup

1. **Navigate to frontend folder:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create `.env` file:**
   ```bash
   # Create .env file with:
   REACT_APP_BASE_URL=http://localhost:5000
   ```

4. **Start the development server:**
   ```bash
   npm start
   ```
   App will run on `http://localhost:3000`

## First Time Setup

1. **Start MongoDB:**
   - If using local MongoDB, ensure it's running
   - If using MongoDB Atlas, use your connection string in backend `.env`

2. **Start Backend:**
   ```bash
   cd backend
   npm run dev
   ```

3. **Start Frontend (in a new terminal):**
   ```bash
   cd frontend
   npm start
   ```

4. **Register Admin:**
   - Go to `http://localhost:3000`
   - Click "Sign up"
   - Create your admin account with school name

## Production Deployment

See `DEPLOYMENT.md` for detailed deployment instructions.

### Quick Deploy Checklist

- [ ] MongoDB Atlas account created
- [ ] Backend deployed (Render/Heroku)
- [ ] Frontend deployed (Netlify/Vercel)
- [ ] Environment variables set
- [ ] CORS configured
- [ ] Test registration and login

## Environment Variables

### Backend (.env)
```
MONGO_URL=your_mongodb_connection_string
PORT=5000
NODE_ENV=production
FRONTEND_URL=https://your-frontend-url.netlify.app
```

### Frontend (.env)
```
REACT_APP_BASE_URL=https://your-backend-url.onrender.com
```

## Troubleshooting

**Backend won't start:**
- Check MongoDB connection
- Verify PORT is available
- Check environment variables

**Frontend can't connect:**
- Verify REACT_APP_BASE_URL is correct
- Check backend is running
- Verify CORS settings

**Database errors:**
- Check MongoDB connection string
- Verify network access (for Atlas)
- Check database user permissions

