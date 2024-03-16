import { Box, Grid } from '@mui/material'
import React, { useState } from 'react'
import InputText from '../../common/InputText/InputText'

export default function AdminAction() {
    const [firstName,setFirstName]=useState("")
    const [lastName,setLastName]=useState("")
    const [userName,setUserName]=useState("")
    const [password,setpassword]=useState("")
    
    return (
        <Box>
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <Box>
                        <InputText label={"First Name"} value={firstName} width={"100%"} type={'text'} onChange={(val)=>setFirstName(val.target.value)}/>
                        </Box>

                    </Grid>
                    <Grid item xs={3}>
                        <Box>
                        <InputText label={"Last Name"} value={lastName} width={"100%"} type={'text'} onChange={(val)=>setLastName(val.target.value)}/>
                        </Box>

                    </Grid>
                    <Grid item xs={3}>
                        <Box>
                        <InputText label={"User Name"} value={userName} width={"100%"} type={'text'} onChange={(val)=>setUserName(val.target.value)}/>
                        </Box>

                    </Grid>
                    <Grid item xs={3}>
                        <Box>
                        <InputText label={"Password"} value={password} width={"100%"} type={'password'} onChange={(val)=>setpassword(val.target.value)}/>
                        </Box>

                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}
