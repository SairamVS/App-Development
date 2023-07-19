import React from 'react';
import NavBar from './NavBar';
import './Home.css';
import { Box, Button, FormControl, InputLabel } from '@mui/material'; 
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';


const Home = () => {
  
  return (
    <>
    <NavBar/>
    <div className='cont1'>
      <Box sx={{width:1500,height:350,borderWidth:3,borderStyle:'solid'}} className='box1'>
        <div>
          <label style={{color:'whitesmoke',marginLeft:'10px'}}>Date of Visiting :</label>
          <input type='date' className='date1'></input>
          <input type='time' style={{marginLeft:2}}></input>
        </div>
        <div className='m1'>
          <FormControl sx={{ m:1, minWidth: 100 }} className='inp1'>
            <InputLabel sx={{backgroundColor:'whitesmoke',width:100,height:20,borderColor:'black',borderWidth:3,borderStyle:'solid'}}>Members</InputLabel>
            <Select>
              <MenuItem>1</MenuItem>
              <MenuItem>2</MenuItem>
              <MenuItem>3</MenuItem>
              <MenuItem>4</MenuItem>
              <MenuItem>5</MenuItem>
              <MenuItem>6</MenuItem>
              <MenuItem>7</MenuItem>
              <MenuItem>8</MenuItem>
              <MenuItem>9</MenuItem>
              <MenuItem>10</MenuItem>
              <MenuItem>11</MenuItem>
              <MenuItem>12</MenuItem>
              <MenuItem>13</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div>
          <input type='text' placeholder='Search For Restaurants' className='r1'/>
          <Button variant='contained' sx={{height:30,marginLeft:2}}>Search</Button>
        </div>
      </Box><br/>
      <Box sx={{width:1500,height:500,borderColor:'black',borderWidth:4,borderStyle:'double'}}>
        <h2 style={{textAlign:'center'}}>Best Offers</h2>
        <div>
          <img src='/images/Offer1.jpg' width='300' height='400' style={{marginLeft:'70px'}}></img>
          <img src='/images/Offer2.jpg' width='300' height='400' style={{marginLeft:'70px'}}></img>
          <img src='/images/Offer3.jpg' width='300' height='400' style={{marginLeft:'70px'}}></img>
          <img src='/images/Offer4.jpg' width='300' height='400' style={{marginLeft:'70px'}}></img>
        </div>

      </Box>
      <div>
      <footer class="footer">
  <div class="footer-content">
    <p className='thiru'>© 2023 Your Company. All rights reserved.</p>
    <ul class="footer-links">
      <li><a href="#"></a><InstagramIcon/></li>
      <li><a href="#"></a><FacebookIcon/></li>
      <li><a href="#"></a><TwitterIcon/></li>
      <li><a href="#"></a><LinkedInIcon/></li>      
    </ul>
  </div>
</footer>
      </div>
    </div>
    </>
  );
}

export default Home
