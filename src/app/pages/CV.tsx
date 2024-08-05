/* eslint-disable @next/next/no-img-element */

import { Avatar, Box, Chip, Divider, Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import TextFooter from '../layouts/TextFooter';
import ProjectTable from '../components/ProjectTable';
import EducationTable from '../components/EducationTable';
import CertificationTable from '../components/CertificationTable';
import PersonalDetailTable from '../components/PersonalDetailTable';
import EmploymentTable from '../components/EmploymentTable';
import ProfileDetail from '../components/ProfileDetail';
import PageFooter from '../layouts/PageFooter';
import PageHeader from '../layouts/PageHeader';
import DATA from '../data-dummy';

const CV = () => {
  return (
    <>
      <PageHeader />
      <PageFooter />
      <Box component="table" sx={{ width: '100%' }}>
        <Box component="thead">
          <Box component="tr">
            <Box component="td">
              <Box className="page-header-space" />
            </Box>
          </Box>
        </Box>
        <Box component="tbody">
          <Box component="tr">
            <Box
              component="td"
              sx={{
                py: 2,
                px: 6,
              }}
            >
              <Stack direction="column" spacing={1} alignItems="stretch">
                <Stack direction="row" alignItems="center">
                  <ProfileDetail employee={DATA.employee} />
                </Stack>
                <Stack direction="row" spacing={1} justifyContent="stretch">
                  <Stack direction="column" spacing={1} sx={{ flexBasis: '50%', pb: 4 }}>
                    <Typography variant="body1" sx={{ pt: 1 }}>
                      <strong>Employment</strong>
                    </Typography>
                    <EmploymentTable data={DATA.histories.employment} />
                  </Stack>
                  <Divider orientation="vertical" flexItem />
                  <Stack direction="column" spacing={1} sx={{ flexBasis: '50%', pb: 4 }}>
                    <PersonalDetailTable data={DATA.employee.biodata} />
                  </Stack>
                </Stack>
                <Divider flexItem />
                <Stack direction="row" spacing={1} justifyContent="stretch" sx={{ pb: 2, pageBreakAfter: 'always' }}>
                  <Stack direction="column" spacing={1} sx={{ flexBasis: '50%', pb: 4 }}>
                    <CertificationTable data={DATA.histories.certification} />
                  </Stack>
                  <Divider orientation="vertical" flexItem />
                  <Stack direction="column" spacing={1} sx={{ flexBasis: '50%', pb: 4 }}>
                    <EducationTable data={DATA.histories.education} />
                  </Stack>
                </Stack>
                <ProjectTable data={DATA} />
                <TextFooter />
              </Stack>
            </Box>
          </Box>
        </Box>
        <Box component="tfoot">
          <Box component="tr">
            <Box component="td">
              <Box className="page-footer-space" />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CV;
