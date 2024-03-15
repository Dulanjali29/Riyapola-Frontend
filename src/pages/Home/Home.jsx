
import React from 'react'
import { Box, Typography } from '@mui/material'
import login2 from '../../assets/img/login2.jpg'
import MyButton from '../../common/Button/MyButton'
import Footer from '../../common/SecondFooter/SecondFooter'
export default function Home() {
    return (
        <Box >
            <Box sx={{width:"30%" ,marginTop:"400px",marginLeft:"50px",   position:'absolute',opacity:"100%",zIndex:"100px",padding:"20px"}}>
                <Box>
                    <Typography sx={{ textAlign: "left", fontSize: "40px", fontWeight: "bold" }}>
                        Welcome to Riyapola Pvt.LTD
                    </Typography>
                </Box>
               
            </Box>
            
                <Box>
                <Box  sx={{marginTop:"600px", marginLeft:"70px", width:"30%",opacity:"100%", position:"absolute",zIndex:"100px"}}>
                <MyButton name={"Login"} width={'50%'} background={"#000000"} hoverColor={"#808080"}/>
                </Box>
                </Box>
            <Box>
                <img style={{ width: "100%" ,height:"900px"}} src={login2} alt='' />
            </Box>
            <Footer/>
        </Box>
    )
}