'use client';

import React from 'react';
import { Box, Button, AppBar, Toolbar, Typography } from '@mui/material';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

const NavMenu = () => {
  const router = useRouter();
  const pathname = usePathname();

  // Navigation items
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Find Match', path: '/form' },
    { name: 'My Matches', path: '/match' },
  ];

  return (
    <AppBar 
      position="static" 
      sx={{ 
        backgroundColor: 'rgba(255, 240, 245, 0.95)', 
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        backdropFilter: 'blur(6px)'
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography 
          variant="h6" 
          sx={{ 
            fontWeight: 'bold',
            color: '#660F81',
            fontFamily: `'Segoe UI', 'Comic Sans MS', cursive`,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <img 
            src="/images/pawImage.png" 
            alt="Pet Matcher" 
            style={{ 
              height: '32px', 
              marginRight: '10px',
            }} 
          />
            Pet Matcher
        </Typography>

        <Box sx={{ display: 'flex' }}>
          {navItems.map((item) => (
            <Link href={item.path} key={item.path} passHref style={{ textDecoration: 'none' }}>
              <Button
                sx={{
                  mx: 1,
                  color: pathname === item.path ? '#d6336c' : '#660F81',
                  fontWeight: pathname === item.path ? 'bold' : 'normal',
                  borderBottom: pathname === item.path ? '2px solid #d6336c' : 'none',
                  borderRadius: 0,
                  '&:hover': {
                    backgroundColor: 'rgba(214, 51, 108, 0.08)',
                  },
                }}
              >
                {item.name}
              </Button>
            </Link>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavMenu;
