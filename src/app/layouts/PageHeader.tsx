import React from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';

const PageHeader = () => (
  <Box className="page-header" sx={{ position: 'relative', width: '100%', height: 50 }}>
    <Image src="/Header.png" alt="Header Image" layout="fill" objectFit="cover" />
    <Box sx={{ position: 'absolute', top: 0, left: 0 }}>
      <Image src="/Logo.svg" alt="Logo" width={50} height={50} />
    </Box>
  </Box>
);

export default PageHeader;
