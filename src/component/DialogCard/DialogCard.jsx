import { Box, Dialog,Grid } from '@mui/material'
import React from 'react'
import Slide from '@mui/material/Slide';
import { useState } from 'react';

import InputText from '../../common/InputText/InputText';
import MyButton from '../../common/Button/MyButton';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

export default function DialogCard({open,close,updateAdmin,updateData}) {
    const [data, setData] = useState([])
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [userName, setUserName] = useState("")
    const [password, setpassword] = useState("")
    const [role, setRole] = useState("")

    const save=()=>{

    }
    
    const clear=()=>{
        
    }

  return (
    <Dialog open={open} 
    TransitionComponent={Transition}
    keepMounted
    onClose={close}
    aria-describedby="alert-dialog-slide-description"
    >
     
     <Box sx={{width:"800px",height:"400px",}}>
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <Box  >
                            <InputText label={"First Name"} value={firstName} width={"100%"} type={'text'} onChange={(val) => setFirstName(val.target.value)} />
                        </Box>

                    </Grid>
                    <Grid item xs={3}>
                        <Box>
                            <InputText label={"Last Name"} value={lastName} width={"100%"} type={'text'} onChange={(val) => setLastName(val.target.value)} />
                        </Box>

                    </Grid>
                    <Grid item xs={3}>
                        <Box>
                            <InputText label={"User Name"} value={userName} width={"100%"} type={'text'} onChange={(val) => setUserName(val.target.value)} />
                        </Box>

                    </Grid>
                    <Grid item xs={3}>
                        <Box>
                            <InputText label={"Password"} value={password} width={"100%"} type={'password'} onChange={(val) => setpassword(val.target.value)} />
                        </Box>

                    </Grid>
                    <Grid item xs={3}>
                        <Box>
                            <InputText label={"Role"} value={role} width={"100%"} type={'text'} onChange={(val) => setRole(val.target.value)} />
                        </Box>

                    </Grid>

                </Grid>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "end", gap: "10px" }}>
                <Box sx={{}}>
                    <MyButton name={"Save"} width={'200px'} background={"#512E5F"} hoverColor={"#5D6D7E "} onClick={save} />
                </Box>
                <Box sx={{}}>
                    <MyButton name={"Clear"} width={'200px'} background={"#000080"} hoverColor={"#008080"} onClick={clear} />
                </Box>
            </Box>
            
        </Box>
    </Dialog>
  )
}
