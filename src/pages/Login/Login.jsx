
import { Box, Typography } from '@mui/material'

import React, { useState } from 'react'
import InputText from '../../common/InputText/InputText'
import login from '../../assets/img/login3.jpg'
import MyButton from '../../common/Button/MyButton'
import SecondFooter from '../../common/SecondFooter/SecondFooter'
import Alert from '../../common/Alert/Alert'
import instance from '../../service/AxiosOrder'

export default function Login() {

  const [username,setUserName]=useState();
  const [password,setPassword]=useState();

  const adminLogin=()=>{
    instance.post('/login', {
      username: username,
      password: password
    })
      .then(function (response) {
        console.log(response.data.token);
        localStorage.setItem('stmToken', response.data.token);
        console.log(response.data.token);
        // window.location.reload();
        // Alert('success', 'Success Registration', 'User Login Successful!')
      })
      .catch(function (error) {
        console.log(error);

      });

  }
  return (
    <Box>
      <Box sx={{display:"flex",justifyContent:"center"}}>
        <Box sx={{width:"30%",background:"#BDC3C7" ,marginTop:"300px",position:'absolute',opacity:"85%",zIndex:"100px",padding:"20px"}}>
          <Box>
            <Typography sx={{ fontWeight: "bold", paddingBottom: "20px",display:"flex" ,justifyContent:"center",color:"#000080", fontSize:"25px"}}>
              Admin Login
            </Typography>
          </Box>
          <Box>
            <InputText label={"User Name"} value={username} width={"100%"} type={'text'} onChange={(val)=>setUserName(val.target.value)}/>
            <InputText label={"Password"} value={password} width={"100%"}type={'password'} onChange={(val)=>setPassword(val.target.value)} />

          </Box>
          <Box sx={{opacity:"100%"}}>
            <MyButton name={"Login"} width={'100%'} background={"#000080"} hoverColor={"#008080"} onClick={adminLogin} />
          </Box>
        </Box>
      </Box>

      <Box>
        <img style={{ width: "100%" }} src={login}  alt=''/>
      </Box>
      <Box sx={{marginTop:"-5px"}}>
      <SecondFooter/>
      </Box>
     
    </Box>
  )
}