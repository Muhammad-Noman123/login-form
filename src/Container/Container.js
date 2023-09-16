import React, { useState } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import { Login } from '@mui/icons-material';
import Login from '../Comp/Login/Login' 
import Signup from '../Comp/Login/signup/Signup'
import { Paper } from '@mui/material';

const Container = () => {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const paperStyle= {width:"280px",margin:"50px auto"}
  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  

  return (
    <Paper style={paperStyle}>
    <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
    <Tab label="Sign in" />
    
    <Tab label="Sign up" />
  </Tabs>
  <CustomTabPanel value={value} index={0}>
  <Login handleChange={handleChange} />
</CustomTabPanel>
<CustomTabPanel value={value} index={1}>
 <Signup />
</CustomTabPanel>
</Paper>
  )
}


export default Container