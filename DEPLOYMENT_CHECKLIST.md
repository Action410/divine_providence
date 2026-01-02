# Deployment Checklist

Use this checklist to ensure everything is properly configured for deployment.

## Pre-Deployment

### Backend
- [ ] All environment variables documented
- [ ] MongoDB connection string ready (Atlas or local)
- [ ] CORS configured for production
- [ ] Error handling in place
- [ ] Production start script added (`npm start`)
- [ ] All dependencies installed
- [ ] `.env` file is in `.gitignore`

### Frontend
- [ ] API base URL configured via environment variable
- [ ] All API calls use centralized config
- [ ] Build script tested locally (`npm run build`)
- [ ] Environment variables documented
- [ ] `.env` file is in `.gitignore`
- [ ] Netlify/Vercel configuration ready

### Database
- [ ] MongoDB Atlas account created (or local MongoDB ready)
- [ ] Database user created with proper permissions
- [ ] Network access configured (for Atlas)
- [ ] Connection string tested

## Deployment Steps

### Step 1: Backend Deployment
- [ ] Create account on Render/Heroku/Railway
- [ ] Connect GitHub repository
- [ ] Set root directory to `backend`
- [ ] Configure build command: `npm install`
- [ ] Configure start command: `npm start`
- [ ] Add environment variables:
  - [ ] `MONGO_URL`
  - [ ] `PORT` (usually auto-set)
  - [ ] `NODE_ENV=production`
  - [ ] `FRONTEND_URL` (will add after frontend deploy)
- [ ] Deploy and get backend URL
- [ ] Test backend endpoint

### Step 2: Frontend Deployment
- [ ] Create account on Netlify/Vercel
- [ ] Connect GitHub repository
- [ ] Set base directory to `frontend`
- [ ] Configure build command: `npm run build`
- [ ] Configure publish directory: `build`
- [ ] Add environment variable:
  - [ ] `REACT_APP_BASE_URL` (your backend URL)
- [ ] Deploy and get frontend URL
- [ ] Update backend `FRONTEND_URL` with frontend URL

### Step 3: Final Configuration
- [ ] Update backend `FRONTEND_URL` environment variable
- [ ] Redeploy backend (if needed)
- [ ] Test frontend can connect to backend
- [ ] Test registration
- [ ] Test login
- [ ] Test all major features

## Post-Deployment Testing

### Authentication
- [ ] Admin registration works
- [ ] Admin login works
- [ ] Student login works
- [ ] Teacher login works
- [ ] Logout works

### Core Features
- [ ] Create class
- [ ] Create subject
- [ ] Add student
- [ ] Add teacher
- [ ] Mark attendance
- [ ] Add exam marks
- [ ] View notices
- [ ] Create complaint

### Security
- [ ] HTTPS enabled (automatic on Netlify/Render)
- [ ] CORS properly configured
- [ ] Environment variables not exposed
- [ ] Database credentials secure

## Troubleshooting

If something doesn't work:

1. **Check Logs**
   - Backend: Render/Heroku logs
   - Frontend: Netlify/Vercel logs
   - Browser console

2. **Verify Environment Variables**
   - All variables set correctly
   - No typos in variable names
   - Values match deployment URLs

3. **Test Connections**
   - Backend accessible via URL
   - Frontend can reach backend
   - Database connection working

4. **Common Issues**
   - CORS errors → Check `FRONTEND_URL` in backend
   - Connection refused → Check backend URL in frontend
   - Database errors → Check MongoDB connection string
   - Build failures → Check Node version compatibility

## URLs to Document

After deployment, document these URLs:

- Backend URL: `___________________________`
- Frontend URL: `___________________________`
- MongoDB Atlas Cluster: `___________________________`

## Notes

- Free tiers may have limitations (e.g., Render spins down after inactivity)
- Consider upgrading for production use
- Keep environment variables secure
- Regularly backup database

