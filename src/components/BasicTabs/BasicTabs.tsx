import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface BasicTabsProps {
  tabs: { label: string; content: React.ReactNode }[];
}

const CustomTabPanel: React.FC<TabPanelProps> = ({ children, value, index, ...other }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

const tabProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

const BasicTabs: React.FC<BasicTabsProps> = ({ tabs }) => {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }} padding={0}>
      <Box>
        <Tabs sx={{ '& .MuiTabs-indicator': { backgroundColor: '#666' }}} value={value} onChange={handleChange} aria-label="basic tabs example" centered>
          {tabs.map((tab, index) => (
            <Tab style={ isMobile ? {flex: 1} : {flex: 'unset'}} sx={{ '&.Mui-selected': { color: '#666' }}} label={tab.label} {...tabProps(index)} key={index} />
          ))}
        </Tabs>
      </Box>
      {tabs.map((tab, index) => (
        <CustomTabPanel value={value} index={index} key={index}>
          {tab.content}
        </CustomTabPanel>
      ))}
    </Box>
  );
}

export default React.memo(BasicTabs);
