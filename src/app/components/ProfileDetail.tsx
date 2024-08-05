import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';

const ProfileDetail = ({ employee }) => (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h5" sx={{ py: 1 }}>
        <strong>{employee.name}</strong>
      </Typography>
      <Typography variant="subtitle1">{employee.position}</Typography>
      <Typography variant="subtitle2">{employee.email}</Typography>
    </Box>
    <Box>
      <Avatar src={employee.image} sx={{ height: 150, width: 150 }}>
        Talent Image
      </Avatar>
    </Box>
    </>
);

export default ProfileDetail;
