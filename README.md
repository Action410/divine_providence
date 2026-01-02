<h1 align="center">
    SCHOOL MANAGEMENT SYSTEM
</h1>

<h3 align="center">
Streamline school management, class organization, and add students and faculty.<br>
Seamlessly track attendance, assess performance, and provide feedback. <br>
Access records, view marks, and communicate effortlessly.
</h3>

<br>
[Youtube Video](https://youtu.be/ol650KwQkgY?si=rKcboqSv3n-e4UbC)
<br><br>
[LinkedIn](https://www.linkedin.com/in/yogndr/)

# About

The School Management System is a web-based application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It aims to streamline school management, class organization, and facilitate communication between students, teachers, and administrators.

## Features

- **User Roles:** The system supports three user roles: Admin, Teacher, and Student. Each role has specific functionalities and access levels.

- **Admin Dashboard:** Administrators can add new students and teachers, create classes and subjects, manage user accounts, and oversee system settings.

- **Attendance Tracking:** Teachers can easily take attendance for their classes, mark students as present or absent, and generate attendance reports.

- **Performance Assessment:** Teachers can assess students' performance by providing marks and feedback. Students can view their marks and track their progress over time.

- **Data Visualization:** Students can visualize their performance data through interactive charts and tables, helping them understand their academic performance at a glance.

- **Communication:** Users can communicate effortlessly through the system. Teachers can send messages to students and vice versa, promoting effective communication and collaboration.

## Technologies Used

- Frontend: React.js, Material UI, Redux
- Backend: Node.js, Express.js
- Database: MongoDB

<br>

# Installation

```sh
git clone https://github.com/Yogndrr/MERN-School-Management-System.git
```

## Quick Start

For detailed setup instructions, see [QUICK_START.md](./QUICK_START.md)

### Backend Setup

Open Terminal 1:
```sh
cd backend
npm install
```

Create a `.env` file in the backend folder:
```env
MONGO_URL=mongodb://127.0.0.1/school
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

**Note:** If using MongoDB Atlas, replace the MONGO_URL with your Atlas connection string.

Start the backend:
```sh
npm run dev
```
Backend will run on `http://localhost:5000`

### Frontend Setup

Open Terminal 2:
```sh
cd frontend
npm install
```

Create a `.env` file in the frontend folder:
```env
REACT_APP_BASE_URL=http://localhost:5000
```

Start the frontend:
```sh
npm start
```
Frontend will run on `http://localhost:3000`

## Deployment

For production deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)

**Quick Deploy:**
- Backend: Deploy to [Render](https://render.com) or [Heroku](https://heroku.com)
- Frontend: Deploy to [Netlify](https://netlify.com) or [Vercel](https://vercel.com)
- Database: Use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (free tier available)
<br>
# Error Solution

You might encounter an error while signing up, either a network error or a loading error that goes on indefinitely.

To resolve it:

1. Navigate to the `frontend > .env` file.

2. Uncomment the first line. After that, terminate the frontend terminal. Open a new terminal and execute the following commands:
```sh
cd frontend
npm start
```

After completing these steps, try signing up again. If the issue persists, follow these additional steps to resolve it:

1. Navigate to the `frontend > src > redux > userRelated > userHandle.js` file.

2. Add the following line after the import statements:

```javascript
const REACT_APP_BASE_URL = "http://localhost:5000";
```

3. Replace all instances of `process.env.REACT_APP_BASE_URL` with `REACT_APP_BASE_URL`.

**IMPORTANT:** Repeat the same process for all other files with "Handle" in their names.

For example, in the `redux` folder, there are other folders like `userRelated`. In the `teacherRelated` folder, you'll find a file named `teacherHandle`. Similarly, other folders contain files with "Handle" in their names. Make sure to update these files as well.

The issue arises because the `.env` file in the frontend may not work for all users, while it works for me.

Additionally:

- When testing the project, start by signing up rather than logging in as a guest or using regular login if you haven't created an account yet.
  
  To use guest mode, navigate to `LoginPage.js` and provide an email and password from a project already created in the system. This simplifies the login process, and after creating your account, you can use your credentials.

These steps should resolve the network error in the frontend. If the issue persists, feel free to contact me for further assistance.

# Delete Feature Not Working Solution

When attempting to delete items, you may encounter a popup message stating, "Sorry, the delete function has been disabled for now." This message appears because I have disabled the delete function on my live site to prevent guests from deleting items. If you wish to enable the delete feature, please follow these steps:

1. Navigate to the `frontend > src > redux > userRelated > userHandle.js` file.

2. If you haven't made any changes, you should find the `deleteUser` function at line 71. It may be commented out. It might look like this:

```javascript
// export const deleteUser = (id, address) => async (dispatch) => {
//     dispatch(getRequest());

//     try {
//         const result = await axios.delete(`${process.env.REACT_APP_BASE_URL}/${address}/${id}`);
//         if (result.data.message) {
//             dispatch(getFailed(result.data.message));
//         } else {
//             dispatch(getDeleteSuccess());
//         }
//     } catch (error) {
//         dispatch(getError(error));
//     }
// }
```

3. Uncomment above `deleteUser` function and comment out this `deleteUser` function that is currently running from line 87 to line 90 :

```javascript
export const deleteUser = (id, address) => async (dispatch) => {
    dispatch(getRequest());
    dispatch(getFailed("Sorry the delete function has been disabled for now."));
}
```

4. If you have previously modified the code, you may find the `deleteUser` functions at different lines. In this case, uncomment the original code and comment out the current one.

5. Next, navigate to the `frontend > src > pages > admin` folder. Here, you will find different folders suffixed with "Related". Open each folder and locate files prefixed with "Show".

6. Open each file with "Show" as a prefix and search for a function named `deleteHandler`. For example:
   
```javascript
const deleteHandler = (deleteID, address) => {
  console.log(deleteID);
  console.log(address);
  setMessage("Sorry, the delete function has been disabled for now.");
  setShowPopup(true);
  // dispatch(deleteUser(deleteID, address))
  //   .then(() => {
  //     dispatch(getAllSclasses(adminID, "Sclass"));
  //   })
}
```

7. This is an example snippet from `ShowClasses`. In other files with "Show" as a prefix, it may differ.

8. Uncomment the commented-out code inside the `deleteHandler` function and comment out the existing code. It should resemble this:

```javascript
const deleteHandler = (deleteID, address) => {
  // console.log(deleteID);
  // console.log(address);
  // setMessage("Sorry, the delete function has been disabled for now.");
  // setShowPopup(true);
  dispatch(deleteUser(deleteID, address))
    .then(() => {
      dispatch(getAllSclasses(adminID, "Sclass"));
    })
}
```

9. Repeat these steps for every other file. In some cases, the `deleteHandler` function may also be found in files prefixed with "View". Check those files and repeat the same process.

If the issue persists, feel free to contact me for further assistance.

Don't forget to leave a star for this project if you found the solution helpful. Thank you!

# Deployment
* Render - server side
* Netlify - client side

