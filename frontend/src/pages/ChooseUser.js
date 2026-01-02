import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Grid,
  Paper,
  Box,
  Container,
  CircularProgress,
  Backdrop,
  Typography,
} from '@mui/material';
import { AccountCircle, School, Group } from '@mui/icons-material';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/userRelated/userHandle';
import Popup from '../components/Popup';

const ChooseUser = ({ visitor }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const password = "zxc"

  const { status, currentUser, currentRole } = useSelector(state => state.user);;

  const [loader, setLoader] = useState(false)
  const [showPopup, setShowPopup] = useState(false);
  const [message, setMessage] = useState("");

  const navigateHandler = (user) => {
    if (user === "Admin") {
      if (visitor === "guest") {
        const email = "yogendra@12"
        const fields = { email, password }
        setLoader(true)
        dispatch(loginUser(fields, user))
      }
      else {
        navigate('/Adminlogin');
      }
    }

    else if (user === "Student") {
      if (visitor === "guest") {
        const rollNum = "1"
        const studentName = "Dipesh Awasthi"
        const fields = { rollNum, studentName, password }
        setLoader(true)
        dispatch(loginUser(fields, user))
      }
      else {
        navigate('/Studentlogin');
      }
    }

    else if (user === "Teacher") {
      if (visitor === "guest") {
        const email = "tony@12"
        const fields = { email, password }
        setLoader(true)
        dispatch(loginUser(fields, user))
      }
      else {
        navigate('/Teacherlogin');
      }
    }
  }

  useEffect(() => {
    if (status === 'success' || currentUser !== null) {
      if (currentRole === 'Admin') {
        navigate('/Admin/dashboard');
      }
      else if (currentRole === 'Student') {
        navigate('/Student/dashboard');
      } else if (currentRole === 'Teacher') {
        navigate('/Teacher/dashboard');
      }
    }
    else if (status === 'error') {
      setLoader(false)
      setMessage("Network Error")
      setShowPopup(true)
    }
  }, [status, currentRole, navigate, currentUser]);

  return (
    <StyledContainer>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h4" sx={{ color: "#2d5016", fontWeight: 'bold', mb: 1 }}>
            Divine Providence School
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "#f4d03f", fontStyle: 'italic', mb: 3 }}>
            caring for the future
          </Typography>
          <Typography variant="h5" sx={{ color: "#1a1a1a", mb: 4 }}>
            Choose Your Role
          </Typography>
        </Box>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <StyledPaper elevation={3} onClick={() => navigateHandler("Admin")}>
              <Box mb={2} sx={{ color: "#2d5016" }}>
                <AccountCircle sx={{ fontSize: 60 }} />
              </Box>
              <StyledTypography>
                Admin
              </StyledTypography>
              <Typography variant="body2" sx={{ color: "#666", mt: 1, lineHeight: 1.6 }}>
                Login as an administrator to access the dashboard to manage app data.
              </Typography>
            </StyledPaper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <StyledPaper elevation={3} onClick={() => navigateHandler("Student")}>
              <Box mb={2} sx={{ color: "#2d5016" }}>
                <School sx={{ fontSize: 60 }} />
              </Box>
              <StyledTypography>
                Student
              </StyledTypography>
              <Typography variant="body2" sx={{ color: "#666", mt: 1, lineHeight: 1.6 }}>
                Login as a student to explore course materials and assignments.
              </Typography>
            </StyledPaper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <StyledPaper elevation={3} onClick={() => navigateHandler("Teacher")}>
              <Box mb={2} sx={{ color: "#2d5016" }}>
                <Group sx={{ fontSize: 60 }} />
              </Box>
              <StyledTypography>
                Teacher
              </StyledTypography>
              <Typography variant="body2" sx={{ color: "#666", mt: 1, lineHeight: 1.6 }}>
                Login as a teacher to create courses, assignments, and track student progress.
              </Typography>
            </StyledPaper>
          </Grid>
        </Grid>
      </Container>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loader}
      >
        <CircularProgress color="inherit" />
        Please Wait
      </Backdrop>
      <Popup message={message} setShowPopup={setShowPopup} showPopup={showPopup} />
    </StyledContainer>
  );
};

export default ChooseUser;

const StyledContainer = styled.div`
  background: linear-gradient(135deg, #f5f7fa 0%, #ffffff 100%);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const StyledPaper = styled(Paper)`
  padding: 2.5rem 2rem;
  text-align: center;
  background-color: #ffffff;
  color: #1a1a1a;
  cursor: pointer;
  border: 2px solid #e0e0e0;
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 280px;

  &:hover {
    background-color: #f8f9fa;
    border-color: #2d5016;
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(45, 80, 22, 0.15);
  }
`;

const StyledTypography = styled.h2`
  margin: 1rem 0 0.5rem 0;
  color: #2d5016;
  font-weight: bold;
  font-size: 1.5rem;
`;