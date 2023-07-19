import { AppBar, Box, Button, Grid, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';

const NavBar = () => {
    const [value,setValue] = useState()
  return (
    <AppBar sx={{backgroundImage:'radial-gradient(circle, rgba(201,109,23,1) 0%, rgba(141,118,12,1) 100%);'}}>
        <Toolbar>
            <Grid container>
                <Grid item xs={1} sx={{marginRight:1,marginTop:1.5}}>
                    <DinnerDiningIcon/>
                </Grid>
                    <Grid item xs={3}>
                        <Tabs value={value} onChange={(e,val)=>setValue(val)}>
                            <Link to='/'><Tab label="Home"/></Link>
                            <Link to='/Restaurant'><Tab label="Restaurants"/></Link>
                        </Tabs>
                    </Grid>
                    <Grid item xs={2}>
                    </Grid>
                    <Grid item xs={5}>
                        <Box display='flex'>
                            <Button sx={{marginLeft: 70,backgroundImage:'linear-gradient(0deg, rgba(192,209,188,1) 0%, rgba(218,224,143,1) 100%);'}} variant='contained'><Link to='/Login'>Login</Link></Button>
                            <Button sx={{marginLeft: 1,backgroundImage:'linear-gradient(0deg, rgba(192,209,188,1) 0%, rgba(218,224,143,1) 100%);'}}variant='contained'><Link to='/Register'>SignUp</Link></Button>
                            <Link to='/Login'><LogoutIcon sx={{marginLeft: 2,marginTop:1,variant:'contained',color:'Black'}}/></Link>
                        </Box>
                    </Grid>
            </Grid>
        </Toolbar>
    </AppBar>    
  );
}

export default NavBar
