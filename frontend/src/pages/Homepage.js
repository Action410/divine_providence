import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Box, Button } from '@mui/material';
import styled from 'styled-components';
import Students from "../assets/students.svg";
import { GreenButton } from '../components/buttonStyles';

const Homepage = () => {
    return (
        <StyledContainer>
            <Grid container spacing={0}>
                <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center' }}>
                    <img src={Students} alt="students" style={{ width: '100%', maxWidth: '600px', height: 'auto' }} />
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <StyledPaper elevation={3}>
                        <StyledTitle>
                            Welcome to
                            <br />
                            Divine Providence School
                        </StyledTitle>
                        <StyledSlogan>
                            caring for the future
                        </StyledSlogan>
                        <StyledText>
                            Streamline school management, class organization, and add students and faculty.
                            Seamlessly track attendance, assess performance, and provide feedback.
                            Access records, view marks, and communicate effortlessly.
                        </StyledText>
                        <StyledBox>
                            <StyledLink to="/choose">
                                <GreenButton variant="contained" fullWidth>
                                    Login
                                </GreenButton>
                            </StyledLink>
                            <StyledLink to="/chooseasguest">
                                <Button variant="outlined" fullWidth
                                    sx={{ mt: 2, mb: 3, color: "#2d5016", borderColor: "#2d5016", fontWeight: "bold" }}
                                >
                                    Login as Guest
                                </Button>
                            </StyledLink>
                            <StyledText>
                                Don't have an account?{' '}
                                <Link to="/Adminregister" style={{color:"#2d5016", fontWeight: "bold"}}>
                                    Sign up
                                </Link>
                            </StyledText>
                        </StyledBox>
                    </StyledPaper>
                </Grid>
            </Grid>
        </StyledContainer>
    );
};

export default Homepage;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #ffffff 100%);
`;

const StyledPaper = styled.div`
  padding: 3rem 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 2rem 0;
  width: 100%;
  max-width: 400px;
`;

const StyledTitle = styled.h1`
  font-size: 2.5rem;
  color: #2d5016;
  font-weight: bold;
  margin: 0;
  padding: 0;
  letter-spacing: -0.5px;
  line-height: 1.2;
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const StyledSlogan = styled.p`
  font-size: 1.25rem;
  color: #f4d03f;
  font-style: italic;
  margin: 0.5rem 0 2rem 0;
  font-weight: 500;
  letter-spacing: 1px;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const StyledText = styled.p`
  color: #1a1a1a;
  margin: 0 0 2rem 0;
  line-height: 1.6;
  font-size: 1rem;
  max-width: 500px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
