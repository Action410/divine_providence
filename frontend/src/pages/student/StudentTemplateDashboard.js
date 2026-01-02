import React, { useMemo, useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Grid,
  IconButton,
  Link as MuiLink,
  Paper,
  Stack,
  Switch,
  Tooltip,
  Typography,
} from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import LightModeIcon from '@mui/icons-material/LightMode';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import { useSelector } from 'react-redux';

const Label = ({ text }) => (
  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
    {text}
  </Typography>
);

const SectionCard = ({ children, sx }) => (
  <Paper elevation={1} sx={{ p: 2, borderRadius: 2, ...sx }}>
    {children}
  </Paper>
);

const StudentTemplateDashboard = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [coolMode, setCoolMode] = useState(true);
  const [nightMode, setNightMode] = useState(false);

  const user = useMemo(() => {
    const fullName = [currentUser?.name, currentUser?.surname]
      .filter(Boolean)
      .join(' ');
    return {
      name: fullName || 'Student User',
      program: currentUser?.sclassName?.sclassName || 'Program',
      dept: currentUser?.department || 'Department',
      nationality: currentUser?.nationality || '—',
      studentId: currentUser?._id?.slice(-8) || '—',
    };
  }, [currentUser]);

  return (
    <Box sx={{ position: 'relative', minHeight: 'calc(100vh - 64px)' }}>
      {/* Top-right background toggle */}
      <Stack direction="row" alignItems="center" spacing={1} sx={{ position: 'absolute', right: 16, top: 8, zIndex: 1 }}>
        <Chip size="small" label={coolMode ? 'Cool' : 'Dark'} />
        <Tooltip title="Toggle Background Mode">
          <Switch checked={coolMode} onChange={() => setCoolMode((v) => !v)} />
        </Tooltip>
      </Stack>

      <Container maxWidth="xl" sx={{ pt: 2, pb: 8 }}>
        <Grid container spacing={3}>
          {/* Main left column */}
          <Grid item xs={12} md={8} lg={8}>
            <SectionCard sx={{
              background: (theme) =>
                coolMode
                  ? theme.palette.mode === 'light'
                    ? theme.palette.common.white
                    : theme.palette.background.paper
                  : theme.palette.action.hover,
            }}>
              <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
                <Typography variant="subtitle2" color="text.secondary">
                  AIT OPEN-BOOK EXAMS GUIDELINES
                </Typography>
                <Chip label="Videos" size="small" color="primary" variant="outlined" />
              </Stack>

              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                py: { xs: 4, md: 8 },
              }}>
                <PlayCircleOutlineIcon color="error" sx={{ fontSize: 120, mb: 2 }} />
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  WATCH THE OPEN-BOOK EXAMS GUIDELINES
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  On Lemass
                </Typography>

                <Stack spacing={1} sx={{ my: 1 }}>
                  <MuiLink href="#" underline="hover">Submit your Ticket Here!!</MuiLink>
                  <MuiLink href="#" underline="hover">Ticket System</MuiLink>
                  <MuiLink href="#" underline="hover">Download Manual</MuiLink>
                  <MuiLink href="#" underline="hover">All Manual for AIT Systems</MuiLink>
                  <MuiLink href="#" underline="hover">My Fees Portal</MuiLink>
                  <MuiLink href="#" underline="hover">Click to View Fees Portal</MuiLink>
                </Stack>
              </Box>
            </SectionCard>

            <Box sx={{ mt: 2 }}>
              <SectionCard>
                <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems={{ xs: 'flex-start', sm: 'center' }}>
                  <Typography variant="subtitle2" color="text.secondary">
                    New Unseen Assignment
                  </Typography>
                  <MuiLink href="#" underline="hover">Assignments</MuiLink>
                </Stack>
                <Divider sx={{ my: 1 }} />
                <Typography variant="body2" color="text.secondary">
                  There are no new unseen assignment
                </Typography>
              </SectionCard>
            </Box>
          </Grid>

          {/* Right column - profile */}
          <Grid item xs={12} md={4} lg={4}>
            <SectionCard sx={{ p: 0, overflow: 'hidden' }}>
              <Box sx={{
                background: (theme) => theme.palette.primary.main,
                color: (theme) => theme.palette.primary.contrastText,
                px: 3,
                py: 4,
              }}>
                <Stack alignItems="center" spacing={1}>
                  <Avatar sx={{ width: 72, height: 72, bgcolor: 'rgba(255,255,255,0.2)' }} />
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    {user.name}
                  </Typography>
                  <Typography variant="caption" sx={{ opacity: 0.9 }}>
                    {user.program}
                  </Typography>
                </Stack>
              </Box>

              <Box sx={{ px: 3, py: 2 }}>
                <Stack direction="row" spacing={2} alignItems="center" sx={{ py: 1 }}>
                  <Label text="BASIC INFORMATION" />
                </Stack>
                <Grid container spacing={1}>
                  <Grid item xs={6}>
                    <Label text="Firstname" />
                    <Typography variant="body2">{currentUser?.name || '—'}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Label text="Lastname" />
                    <Typography variant="body2">{currentUser?.surname || '—'}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Label text="Nationality" />
                    <Typography variant="body2">{user.nationality}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Label text="Student ID Number" />
                    <Typography variant="body2">{user.studentId}</Typography>
                  </Grid>
                </Grid>

                <Stack direction="row" justifyContent="center" sx={{ mt: 2 }}>
                  <Button variant="contained" size="small">Update My Edu Profile</Button>
                </Stack>
              </Box>
            </SectionCard>

            <SectionCard sx={{ mt: 2 }}>
              <Typography variant="subtitle2" sx={{ mb: 1 }}>
                AIT STUDENTS HANDBOOK - ABRIDGED VERSION
              </Typography>
              <Stack direction="row" spacing={2} alignItems="center">
                <Chip size="small" label="Size: 0.22MB" variant="outlined" />
                <Chip size="small" color="primary" label="Type: PDF" />
                <Button size="small">Download</Button>
              </Stack>
            </SectionCard>
          </Grid>
        </Grid>
      </Container>

      {/* Quick Tour and Night Mode toggles - fixed bottom-left */}
      <Stack spacing={2} sx={{ position: 'fixed', left: 16, bottom: 16 }}>
        <Button
          variant="contained"
          startIcon={<QuestionAnswerIcon />}
          sx={{ borderRadius: 999, px: 3 }}
        >
          Quick Tour
        </Button>
        <Paper elevation={1} sx={{ display: 'flex', alignItems: 'center', gap: 1, px: 2, py: 1, borderRadius: 999 }}>
          <IconButton size="small" color={nightMode ? 'default' : 'inherit'}>
            <LightModeIcon fontSize="small" />
          </IconButton>
          <Switch checked={nightMode} onChange={() => setNightMode((v) => !v)} />
          <IconButton size="small" color={nightMode ? 'primary' : 'inherit'}>
            <ModeNightIcon fontSize="small" />
          </IconButton>
          <Typography variant="body2" sx={{ ml: 1 }}>
            Night Mode
          </Typography>
        </Paper>
      </Stack>
    </Box>
  );
};

export default StudentTemplateDashboard;



