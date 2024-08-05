import React from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';

const PageFooter = () => (
  <Box className="page-footer" sx={{ width: '100%', height: 50 }}>
    <Image src="/Footer.png" alt="Footer Image" layout="fill" objectFit="cover" />
  </Box>
);

export default PageFooter;
