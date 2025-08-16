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
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          width: '100vw',
          minHeight: '100vh',
          m: 0,
          p: 0,
          overflow: 'hidden'
        }}
      >
        <Box
          sx={{
            bgcolor: theme.palette.primary.main,
            width: '100%',
            minHeight: { xs: '100vh', sm: '90vh', md: '85vh' },
            borderBottomLeftRadius: { 
              xs: '25% 8%', 
              sm: '35% 9%', 
              md: '45% 10%', 
              lg: '50% 10%' 
            },
            borderBottomRightRadius: { 
              xs: '25% 8%', 
              sm: '35% 9%', 
              md: '45% 10%', 
              lg: '50% 10%' 
            },
            display: 'flex',
            flexDirection: { xs: 'column', lg: 'row' },
            justifyContent: { xs: 'center', lg: 'space-between' },
            alignItems: 'center',
            px: { 
              xs: 1.5, 
              sm: 3, 
              md: 6, 
              lg: 8, 
              xl: 10 
            },
            py: { 
              xs: 4, 
              sm: 6, 
              md: 8, 
              lg: 10,
              xl: 12
            },
            textAlign: { xs: 'center', lg: 'left' },
            gap: { xs: 3, sm: 4, md: 5, lg: 6 },
            boxSizing: 'border-box',
            position: 'relative'
          }}
        >
          {/* Text Section */}
          <Box 
            sx={{ 
              flex: { xs: 'none', lg: 1 },
              width: { xs: '100%', lg: 'auto' },
              maxWidth: { xs: '100%', sm: '600px', lg: 'none' },
              color: 'white',
              zIndex: 2
            }}
          >
            <Box
              component="h1"
              sx={{
                fontSize: { 
                  xs: '1.75rem',   // 28px
                  sm: '2.25rem',   // 36px  
                  md: '2.75rem',   // 44px
                  lg: '3rem',      // 48px
                  xl: '3.25rem'    // 52px
                },
                fontWeight: 700,
                lineHeight: { xs: 1.2, sm: 1.3 },
                mb: { xs: 2, sm: 2.5, md: 3 },
                m: 0,
                letterSpacing: '-0.025em'
              }}
            >
              We are bringing overseas education within everyone's reach
            </Box>
            
            <Box
              component="p"
              sx={{
                fontSize: { 
                  xs: '1rem',      // 16px
                  sm: '1.125rem',  // 18px
                  md: '1.25rem',   // 20px
                  lg: '1.375rem'   // 22px
                },
                lineHeight: { xs: 1.5, sm: 1.6 },
                mb: { xs: 3, sm: 3.5, md: 4 },
                color: 'rgba(255, 255, 255, 0.9)',
                m: 0,
                maxWidth: { xs: '100%', sm: '500px', lg: '600px' },
                mx: { xs: 'auto', lg: 0 }
              }}
            >
              Our tech-enabled solutions help international students and recruitment
              partners choose the best global universities.
            </Box>
            
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#FF7F32",
                "&:hover": { 
                  backgroundColor: "#e86f28",
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 25px rgba(255, 127, 50, 0.3)'
                },
                fontSize: { xs: '0.95rem', sm: '1rem', md: '1.05rem' },
                fontWeight: 600,
                px: { xs: 3, sm: 4, md: 5 },
                py: { xs: 1.2, sm: 1.4, md: 1.6 },
                borderRadius: 2,
                textTransform: 'none',
                boxShadow: '0 4px 15px rgba(255, 127, 50, 0.2)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                minWidth: { xs: '200px', sm: '220px' }
              }}
            >
              Start Your Journey
            </Button>
          </Box>

          {/* Image Section */}
          <Box 
            sx={{
              flex: { xs: 'none', lg: 1 },
              width: { xs: '100%', lg: 'auto' },
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative'
            }}
          >
            <Box 
              sx={{
                position: 'relative',
                width: { 
                  xs: '280px', 
                  sm: '350px', 
                  md: '400px', 
                  lg: '450px',
                  xl: '500px'
                },
                height: { 
                  xs: '250px', 
                  sm: '310px', 
                  md: '355px', 
                  lg: '400px',
                  xl: '445px'
                },
                maxWidth: '90vw',
                borderRadius: { xs: 2, sm: 3 },
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                transform: { 
                  xs: 'none', 
                  md: 'perspective(1000px) rotateY(-5deg) rotateX(2deg)' 
                },
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: { 
                    xs: 'scale(1.02)', 
                    md: 'perspective(1000px) rotateY(-2deg) rotateX(1deg) scale(1.02)' 
                  }
                }
              }}
            >
              <Image
                src="/student.jpg"
                alt="Student with laptop studying abroad"
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "center"
                }}
                sizes="(max-width: 600px) 90vw, (max-width: 960px) 400px, 500px"
                priority
                quality={85}
              />
              
              {/* Overlay gradient for better text contrast on mobile */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(135deg, transparent 0%, rgba(0,0,0,0.1) 100%)',
                  display: { xs: 'block', lg: 'none' }
                }}
              />
            </Box>
          </Box>

          {/* Background decoration */}
          <Box
            sx={{
              position: 'absolute',
              top: { xs: '10%', md: '15%' },
              right: { xs: '5%', md: '10%' },
              width: { xs: '100px', md: '150px' },
              height: { xs: '100px', md: '150px' },
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.05)',
              zIndex: 1,
              display: { xs: 'none', sm: 'block' }
            }}
          />
          
          <Box
            sx={{
              position: 'absolute',
              bottom: { xs: '15%', md: '20%' },
              left: { xs: '2%', md: '5%' },
              width: { xs: '60px', md: '100px' },
              height: { xs: '60px', md: '100px' },
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.03)',
              zIndex: 1,
              display: { xs: 'none', sm: 'block' }
            }}
          />
        </Box>
      </Container>
    </>
  );
}