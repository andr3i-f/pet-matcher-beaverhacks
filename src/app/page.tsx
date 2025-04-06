'use client';

import React from 'react';
import Link from 'next/link';
import { Box, Typography, Button, Container, Grid, Paper } from '@mui/material';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import HomeProvider from './home/HomeProvider';

export default function Home() {
  const router = useRouter();

  return (
   <HomeProvider />
  );
}
