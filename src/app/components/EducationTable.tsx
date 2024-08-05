import React from 'react';
import { Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';

const EducationTable = ({ data }) => (
    <>
    <Typography variant="body1" sx={{ pt: 1 }}>
        <strong>Education</strong>
    </Typography>
    <Table size="small">
        <TableHead>
        <TableRow>
            {['School', 'Degree', 'Subject', 'From', 'To'].map((header) => (
            <TableCell key={header} sx={{ p: 0 }}>
                <Typography variant="caption">
                <strong>{header}</strong>
                </Typography>
            </TableCell>
            ))}
        </TableRow>
        </TableHead>
        <TableBody>
        {data.map((o, i) => (
            <TableRow key={i}>
            <TableCell sx={{ p: 0 }}>
                <Typography variant="caption">{o.school}</Typography>
            </TableCell>
            <TableCell sx={{ p: 0 }}>
                <Typography variant="caption">{o.degree}</Typography>
            </TableCell>
            <TableCell sx={{ p: 0 }}>
                <Typography variant="caption">{o.subject}</Typography>
            </TableCell>
            <TableCell sx={{ p: 0 }}>
                <Typography variant="caption">{o.from}</Typography>
            </TableCell>
            <TableCell sx={{ p: 0 }}>
                <Typography variant="caption">{o.to}</Typography>
            </TableCell>
            </TableRow>
        ))}
        </TableBody>
    </Table>
    </>
);

export default EducationTable;
