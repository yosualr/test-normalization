import React from 'react';
import { Stack, Box, Typography, Chip, Table, TableBody, TableRow, TableCell } from '@mui/material';

const ProjectTable = ({ data }) => {
  return (
    <Stack direction="row" spacing={1} justifyContent="stretch" sx={{ pt: 2 }}>
      <Stack direction="column" spacing={1} sx={{ flexBasis: '100%', pb: 4 }}>
        <Typography variant="body1" sx={{ pt: 1 }}>
          <strong>Project</strong>
        </Typography>
        {data.histories.project.map((project, index) => (
          <Box key={index} sx={{ pt: 1, pb: 3 }}>
            <Stack direction="row" spacing={1}>
              <Chip label={index + 1} sx={{ flexBasis: 50 }} />
              <Table size="small">
                <TableBody>
                  <TableRow>
                    <TableCell sx={{ width: 100, p: 0 }}>
                      <Typography variant="caption">
                        <strong>Project Name</strong>
                      </Typography>
                    </TableCell>
                    <TableCell colSpan={5} sx={{ p: 0 }}>
                      <Typography variant="body2">{project.projectName}</Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ p: 0 }}>
                      <Typography variant="caption">
                        <strong>Role</strong>
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ p: 0 }}>
                      <Typography variant="body2">{project.role}</Typography>
                    </TableCell>
                    <TableCell sx={{ width: 50, p: 0 }}>
                      <Typography variant="caption">
                        <strong>From</strong>
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ width: 50, p: 0 }}>
                      <Typography variant="body2">{project.from}</Typography>
                    </TableCell>
                    <TableCell sx={{ width: 50, p: 0 }}>
                      <Typography variant="caption">
                        <strong>To</strong>
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ width: 50, p: 0 }}>
                      <Typography variant="body2">{project.to}</Typography>
                    </TableCell>
                  </TableRow>
                  {[
                    ['Customer', 'customer'],
                    ['Project Description', 'projectDescription'],
                    ['Technical Information', 'technicalInformation'],
                    ['Job Description', 'jobDescription'],
                  ].map(([label, key]) => (
                    <TableRow key={key}>
                      <TableCell sx={{ p: 0 }}>
                        <Typography variant="caption">
                          <strong>{label}</strong>
                        </Typography>
                      </TableCell>
                      <TableCell colSpan={5} sx={{ p: 0 }}>
                        <Typography variant="body2">{project[key]}</Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Stack>
          </Box>
        ))}
      </Stack>
    </Stack>
  );
};

export default ProjectTable;
