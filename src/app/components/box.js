"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#007FFF',
      dark: '#0066CC',
    },
  },
});

export default function FullScreenBox() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: '100vw',   // full screen width
          height: '100vh',  // full screen height
          bgcolor: 'primary.main',
          borderRadius: 0,  // remove rounding (you can curve bottom later)
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '&:hover': {
            bgcolor: 'primary.dark',
          },
        }}
      >
        <h1 style={{ color: 'white' }}>Full Screen Box</h1>
      </Box>
    </ThemeProvider>
  );
}
