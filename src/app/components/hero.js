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
          m: 0,
          p: 0,
          overflow: 'hidden'
        }}
      >
        <Box
          sx={{
            bgcolor: theme.palette.primary.main,
            width: '100%',
            // Adjusted heights for better mobile experience
            minHeight: { 
              xs: 'calc(100vh - 56px)', // Account for mobile AppBar
              sm: 'calc(100vh - 64px)',  // Account for desktop AppBar
              md: '90vh',
              lg: '85vh'
            },
            // More subtle curves for better mobile display
            borderBottomLeftRadius: { 
              xs: '15% 6%',   // Less aggressive curves on mobile
              sm: '20% 7%', 
              md: '30% 8%', 
              lg: '40% 9%',
              xl: '50% 10%' 
            },
            borderBottomRightRadius: { 
              xs: '15% 6%', 
              sm: '20% 7%', 
              md: '30% 8%', 
              lg: '40% 9%',
              xl: '50% 10%' 
            },
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: { xs: 'center', md: 'space-between' },
            alignItems: 'center',
            // More responsive padding
            px: { 
              xs: 2,    // 16px on mobile
              sm: 3,    // 24px on small tablets
              md: 4,    // 32px on tablets
              lg: 6,    // 48px on desktop
              xl: 8     // 64px on large screens
            },
            py: { 
              xs: 3,    // Reduced top/bottom padding on mobile
              sm: 4, 
              md: 6, 
              lg: 8,
              xl: 10
            },
            textAlign: { xs: 'center', md: 'left' },
            gap: { xs: 2, sm: 3, md: 4, lg: 5 },
            boxSizing: 'border-box',
            position: 'relative'
          }}
        >
          {/* Text Section */}
          <Box 
            sx={{ 
              flex: { xs: 'none', md: 1 },
              width: { xs: '100%', md: 'auto' },
              maxWidth: { xs: '100%', sm: '90%', md: '600px', lg: 'none' },
              color: 'white',
              zIndex: 2,
              // Better mobile centering
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'center', md: 'flex-start' }
            }}
          >
            <Box
              component="h1"
              sx={{
                fontSize: { 
                  xs: '1.5rem',    // 24px - smaller for mobile
                  sm: '1.85rem',   // 30px
                  md: '2.2rem',    // 35px
                  lg: '2.75rem',   // 44px
                  xl: '3.1rem'     // 50px
                },
                fontWeight: 700,
                lineHeight: { xs: 1.2, sm: 1.25, md: 1.3 },
                mb: { xs: 1.5, sm: 2, md: 2.5 },
                mt: 0,
                letterSpacing: '-0.025em',
                // Better text wrapping on mobile
                textAlign: { xs: 'center', md: 'left' },
                maxWidth: '100%',
                wordBreak: 'break-word'
              }}
            >
              We are bringing overseas education within everyone's reach
            </Box>
            
            <Box
              component="p"
              sx={{
                fontSize: { 
                  xs: '0.9rem',    // 14px - smaller on mobile
                  sm: '1rem',      // 16px
                  md: '1.125rem',  // 18px
                  lg: '1.25rem',   // 20px
                  xl: '1.35rem'    // 22px
                },
                lineHeight: { xs: 1.5, sm: 1.55, md: 1.6 },
                mb: { xs: 2.5, sm: 3, md: 3.5, lg: 4 },
                mt: 0,
                color: 'rgba(255, 255, 255, 0.9)',
                maxWidth: { xs: '100%', sm: '480px', md: '550px', lg: '600px' },
                textAlign: { xs: 'center', md: 'left' },
                wordBreak: 'break-word'
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
                fontSize: { xs: '0.9rem', sm: '0.95rem', md: '1rem', lg: '1.05rem' },
                fontWeight: 600,
                px: { xs: 2.5, sm: 3.5, md: 4, lg: 5 },
                py: { xs: 1, sm: 1.2, md: 1.4, lg: 1.6 },
                borderRadius: { xs: 1.5, sm: 2 },
                textTransform: 'none',
                boxShadow: '0 4px 15px rgba(255, 127, 50, 0.2)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                minWidth: { xs: '180px', sm: '200px', md: '220px' },
                // Better touch targets for mobile
                minHeight: { xs: '44px', sm: '48px' }
              }}
            >
              Start Your Journey
            </Button>
          </Box>

          {/* Image Section */}
          <Box 
            sx={{
              flex: { xs: 'none', md: 1 },
              width: { xs: '100%', md: 'auto' },
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              // Better mobile spacing
              mt: { xs: 2, md: 0 }
            }}
          >
            <Box 
              sx={{
                position: 'relative',
                // More responsive image sizing
                width: { 
                  xs: '90%',      // Use percentage for better mobile scaling
                  sm: '320px', 
                  md: '380px', 
                  lg: '430px',
                  xl: '480px'
                },
                height: { 
                  xs: 'auto',     // Auto height on mobile
                  sm: '280px', 
                  md: '340px', 
                  lg: '385px',
                  xl: '430px'
                },
                // Maintain aspect ratio on mobile
                aspectRatio: { xs: '4/3', sm: 'unset' },
                maxWidth: { xs: '350px', sm: '90vw' },
                borderRadius: { xs: 2, sm: 2.5, md: 3 },
                overflow: 'hidden',
                boxShadow: { 
                  xs: '0 10px 30px rgba(0, 0, 0, 0.15)',
                  md: '0 20px 40px rgba(0, 0, 0, 0.15)'
                },
                transform: { 
                  xs: 'none', 
                  sm: 'none',
                  md: 'perspective(1000px) rotateY(-3deg) rotateX(1deg)',
                  lg: 'perspective(1000px) rotateY(-5deg) rotateX(2deg)' 
                },
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: { 
                    xs: 'scale(1.02)', 
                    sm: 'scale(1.02)',
                    md: 'perspective(1000px) rotateY(-1deg) rotateX(0.5deg) scale(1.02)',
                    lg: 'perspective(1000px) rotateY(-2deg) rotateX(1deg) scale(1.02)' 
                  }
                }
              }}
            >
              <Image
                src="/studentbanner.png"
                alt="Student with laptop studying abroad"
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "center"
                }}
                sizes="(max-width: 600px) 90vw, (max-width: 960px) 380px, 480px"
                priority
                quality={85}
              />
              
              {/* Overlay gradient for better contrast */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(135deg, transparent 0%, rgba(0,0,0,0.05) 100%)',
                  display: { xs: 'block', md: 'none' }
                }}
              />
            </Box>
          </Box>

          {/* Background decoration - More responsive */}
          <Box
            sx={{
              position: 'absolute',
              top: { xs: '8%', sm: '12%', md: '15%' },
              right: { xs: '3%', sm: '5%', md: '8%', lg: '10%' },
              width: { xs: '60px', sm: '80px', md: '120px', lg: '150px' },
              height: { xs: '60px', sm: '80px', md: '120px', lg: '150px' },
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.05)',
              zIndex: 1,
              display: { xs: 'none', sm: 'block' }
            }}
          />
          
          <Box
            sx={{
              position: 'absolute',
              bottom: { xs: '8%', sm: '12%', md: '18%', lg: '20%' },
              left: { xs: '2%', sm: '3%', md: '4%', lg: '5%' },
              width: { xs: '40px', sm: '60px', md: '80px', lg: '100px' },
              height: { xs: '40px', sm: '60px', md: '80px', lg: '100px' },
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.03)',
              zIndex: 1,
              display: { xs: 'none', sm: 'block' }
            }}
          />

          <Box
            sx={{
              position: 'absolute',
              top: { xs: '5%' },
              left: { xs: '8%' },
              width: { xs: '30px' },
              height: { xs: '30px' },
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.04)',
              zIndex: 1,
              display: { xs: 'block', sm: 'none' }
            }}
          />
        </Box>
      </Container>
    </>
  );
}