import React from 'react';
import { Table, TableBody, TableCell, TableRow, Typography } from '@mui/material';

const PersonalDetailTable = ({ data }) => (
    <>    
    <Typography variant="body1" sx={{ pt: 1 }}>
        <strong>Objective</strong>
    </Typography>
    <Typography variant="body2">{data.profile}</Typography>
    <Typography variant="body1" sx={{ pt: 1 }}>
        <strong>Personal Detail</strong>
    </Typography>
    <Table size="small">
        <TableBody>
            <TableRow>
                <TableCell sx={{ p: 0 }}>
                <Typography variant="caption">
                    <strong>Place of Birth</strong>
                </Typography>
                </TableCell>
                <TableCell sx={{ p: 0 }}>
                <Typography variant="caption">{data.placeOfBirth}</Typography>
                </TableCell>
                <TableCell sx={{ p: 0 }}>
                <Typography variant="caption">
                    <strong>Date of Birth</strong>
                </Typography>
                </TableCell>
                <TableCell sx={{ p: 0 }}>
                <Typography variant="caption">{data.dateOfBirth}</Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell sx={{ p: 0 }}>
                <Typography variant="caption">
                    <strong>Gender</strong>
                </Typography>
                </TableCell>
                <TableCell sx={{ p: 0 }}>
                <Typography variant="caption">{data.gender}</Typography>
                </TableCell>
                <TableCell sx={{ p: 0 }}>
                <Typography variant="caption">
                    <strong>Religion</strong>
                </Typography>
                </TableCell>
                <TableCell sx={{ p: 0 }}>
                <Typography variant="caption">{data.religion}</Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell sx={{ p: 0 }}>
                <Typography variant="caption">
                    <strong>Language</strong>
                </Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell colSpan={4} sx={{ p: 0 }}>
                <Typography variant="caption">{data.language}</Typography>
                </TableCell>
            </TableRow>
        </TableBody>
    </Table>
  </>
);

export default PersonalDetailTable;
