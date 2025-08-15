import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth={false} disableGutters sx={{ m: 0, p: 0 }}>
        <Box
          sx={{
            bgcolor: "#1976d2",
            color: "white",
            p: 4,
            textAlign: "center",
            width: "100%",
            borderBottomLeftRadius: { xs: "30% 10%", md: "50% 10%" },
            borderBottomRightRadius: { xs: "30% 10%", md: "50% 10%" }
          }}
        >
          <h2>Curved Bottom Example</h2>
        </Box>
      </Container>
    </React.Fragment>
  );
}
