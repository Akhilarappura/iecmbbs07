'use client';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useTheme } from "@mui/material/styles";
import Button from '@mui/material/Button';
import Image from 'next/image';

export default function FullWidthContainer() {
  const theme = useTheme();

  return (
    <>
      <CssBaseline />
      <Container maxWidth={false} disableGutters>
        <Box
          sx={{
            bgcolor: theme.palette.primary.main,
            width: '100%',
            borderBottomLeftRadius: { xs: '30% 10%', md: '50% 10%' },
            borderBottomRightRadius: { xs: '30% 10%', md: '50% 10%' },
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            px: { xs: 3, sm: 6, md: 12 },
            py: { xs: 8, md: 10 },
            textAlign: { xs: 'center', md: 'left' },
            gap: { xs: 4, md: 0 },
          }}
        >
          {/* Text Section */}
          <Box sx={{ flex: 1, maxWidth: { xs: '100%', md: 500 }, color: 'white' }}>
            <h1
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                fontWeight: "bold",
                marginBottom: "1rem",
                lineHeight: 1.2
              }}
            >
              We are bringing overseas education within everyone’s reach..
            </h1>
            <p
              style={{
                fontSize: "clamp(1rem, 2vw, 1.125rem)",
                marginBottom: "1.5rem",
                color: "#e0e0e0"
              }}
            >
              Our tech-enabled solutions help international students and recruitment
              partners choose the best global universities.
            </p>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#FF7F32",
                "&:hover": { backgroundColor: "#e86f28" },
                fontSize: "1rem",
                px: 3,
                py: 1.2
              }}
            >
              Start Your Journey
            </Button>
          </Box>

          {/* Image Section */}
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', width: '100%' }}>
            <Box sx={{ position: 'relative', width: '100%', maxWidth: { xs: '90%', sm: 400, md: 450 }, aspectRatio: '9/8' }}>
              <Image
                src="/student.jpg"
                alt="Student with laptop"
                fill
                style={{
                  objectFit: "contain",
                  borderRadius: "8px"
                }}
                sizes="(max-width: 768px) 90vw, 450px"
                priority
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}
