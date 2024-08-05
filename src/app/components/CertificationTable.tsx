import React from 'react';
import { Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';

const CertificationTable = ({ data }) => (
    <>
    <Typography variant="body1" sx={{ pt: 1 }}>
        <strong>Course, Training</strong>
    </Typography>
    <Table size="small">
        <TableHead>
        <TableRow>
            {['Title', 'Provider', 'Date', 'Duration', 'Certificate'].map((header) => (
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
                <Typography variant="caption">{o.title}</Typography>
            </TableCell>
            <TableCell sx={{ p: 0 }}>
                <Typography variant="caption">{o.provider}</Typography>
            </TableCell>
            <TableCell sx={{ p: 0 }}>
                <Typography variant="caption">{o.date}</Typography>
            </TableCell>
            <TableCell sx={{ p: 0 }}>
                <Typography variant="caption">{o.duration}</Typography>
            </TableCell>
            <TableCell sx={{ p: 0 }}>
                <Typography variant="caption">{o.certificate}</Typography>
            </TableCell>
            </TableRow>
        ))}
        </TableBody>
    </Table>
    </>
);

export default CertificationTable;
