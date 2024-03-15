import React from 'react'
import { Box, Typography, Grid } from '@mui/material'
import location from '../../assets/icon/location.png'
import email from '../../assets/icon/email.png'
import call from '../../assets/icon/call.png'

export default function Footer() {
    return (
        <Box sx={{background:"#99A3A4 ",width: "100%", height: "90px", marginTop: "-5px",display:"flex",alignItems:"center",}}> 
           <Grid container spacing={2} sx={{justifyContent:"center"}}>
                    <Grid item xs={3}>
                <Box sx={{  color: "#000000", textAlign: "start", paddingTop: "10px", display: "flex", flexDirection: "row" ,justifyContent:"start"}}>
                    <img src={location} alt='' style={{ width: "50px", height: "50px",}} />
                    <Box>
                        <Typography sx={{fontWeight:"bold",fontSize:"25px",paddingLeft:"10px"}}>
                            Location
                        </Typography>
                        <Typography sx={{fontWeight:"bold",paddingLeft:"10px"}}>
                            Kurunegala
                        </Typography>
                    </Box>
                </Box>
                </Grid>
                <Grid item xs={3}>
                    <Box sx={{  color: "#000000", textAlign: "start", paddingTop: "10px", display: "flex", flexDirection: "row",justifyContent:"center" }}>
                        <img src={email} alt='' style={{ width: "50px", height: "50px" ,justifyContent:"center"}} />
                        <Box>
                            <Typography sx={{fontWeight:"bold",fontSize:"25px",marginLeft:"10px"}}>
                                Email
                            </Typography>
                            <Typography sx={{fontWeight:"bold",paddingLeft:"10px"}}>
                                Riyapola@gmail.com
                            </Typography>
                        </Box>
                    </Box>
                    </Grid>
                    <Grid item xs={3}>
                    <Box sx={{  color: "#000000", textAlign: "center", paddingTop: "10px", display: "flex", flexDirection: "row" ,justifyContent:"center"}}>
                        <img src={call} alt='' style={{ width: "50px", height: "45px" ,marginRight:"20px"}} />
                        <Box>
                            <Typography sx={{fontWeight:"bold",fontSize:"25px"}}>
                               Contact
                            </Typography>
                            <Typography sx={{fontWeight:"bold",paddingLeft:"10px"}}>
                               037-2258236
                            </Typography>
                        </Box>
                    </Box>
                    </Grid>
                

</Grid>
        </Box>

    )
}
