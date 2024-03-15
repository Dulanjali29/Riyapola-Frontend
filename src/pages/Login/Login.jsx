
import { Box, Typography } from '@mui/material'

import React from 'react'
import InputText from '../../common/InputText/InputText'
import login from '../../assets/img/login3.jpg'
import MyButton from '../../common/Button/MyButton'
import SecondFooter from '../../common/SecondFooter/SecondFooter'
export default function Login() {
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
            <InputText label={"User Name"} value={'user Name'} width={"100%"} />
            <InputText label={"User Name"} value={'Password'} width={"100%"} />

          </Box>
          <Box sx={{opacity:"100%"}}>
            <MyButton name={"Login"} width={'100%'} background={"#000080"} hoverColor={"#008080"} />
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