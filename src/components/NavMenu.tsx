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
    { name: '', path: '/' }
  ];

  return (
    <AppBar 
      position="static" 
      sx={{ 
        backgroundColor: 'rgba(255, 240, 245, 0.95)', 
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        backdropFilter: 'blur(6px)',
        borderTopRightRadius: '12px',
        borderTopLeftRadius: '12px',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Link href="/">
          <Button>
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
                Pawfect Match
            </Typography>
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default NavMenu;
