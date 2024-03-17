import { Box, Card, Dialog, Grid } from '@mui/material'
import React from 'react'
import Slide from '@mui/material/Slide';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import InputText from '../../common/InputText/InputText';
import IconButton from '@mui/material/IconButton';
import MyButton from '../../common/Button/MyButton';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogCard({ open, close, updateAdmin, updateData }) {

    const [firstName, setFirstName] = useState(updateData?.firstname)
    const [lastName, setLastName] = useState(updateData?.lastname)
    const [userName, setUserName] = useState(updateData?.username)
    const [password, setPassword] = useState(updateData?.password)
    const [role, setRole] = useState(updateData?.role)

    const save = () => {
      

    }

    const clear = () => {
        setFirstName("");
        setLastName("");
        setUserName("");
        setPassword("");
        setRole("");
    }

    return (
        <Dialog open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={close}
            aria-describedby="alert-dialog-slide-description"
        >

            <Card sx={{ minwidth: "1000px", maxWidth: "1400", height: "400px", padding: 5 }}>
                <Box sx={{ marginTop: "-40px", marginLeft: "520px", cursor: "pointer" }}>
                    <IconButton
                        color='error'
                        aria-label="close"
                        onClick={close}
                    >
                        <CloseIcon />
                    </IconButton>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', color: '#4169E1', marginTop: "-10px", marginBottom: "10px" }}>
                    <h1 >Update Admin Information</h1>
                </Box >
                <Box >

                    <Box>
                        <Grid container spacing={3}>
                            <Grid item xs={4}>
                                <Box  >
                                    <InputText label={"First Name"} value={firstName} width={"100%"} type={'text'} onChange={(val) => setFirstName(val.target.value)} />
                                </Box>

                            </Grid>
                            <Grid item xs={4}>
                                <Box>
                                    <InputText label={"Last Name"} value={lastName} width={"100%"} type={'text'} onChange={(val) => setLastName(val.target.value)} />
                                </Box>

                            </Grid>
                            <Grid item xs={4}>
                                <Box>
                                    <InputText label={"User Name"} value={userName} width={"100%"} type={'text'} onChange={(val) => setUserName(val.target.value)} />
                                </Box>

                            </Grid>
                            <Grid item xs={4}>
                                <Box>
                                    <InputText label={"Password"} value={password} width={"100%"} type={'password'} onChange={(val) => setpassword(val.target.value)} />
                                </Box>

                            </Grid>
                            <Grid item xs={4}>
                                <Box>
                                    <InputText label={"Role"} value={role} width={"100%"} type={'text'} onChange={(val) => setRole(val.target.value)} />
                                </Box>

                            </Grid>

                        </Grid>
                    </Box>

                    <Box sx={{ display: "flex", justifyContent: "end", gap: "10px", marginLeft: "10px" }}>
                        <Box sx={{}}>
                            <MyButton name={"Save"} width={'150px'} background={"#008000"} hoverColor={"#5D6D7E "} onClick={save} />
                        </Box>
                        <Box sx={{}}>
                            <MyButton name={"Clear"} width={'150px'} background={"#CA6F1E "} hoverColor={"#008080"} onClick={clear} />
                        </Box>
                        {/* <Box sx={{}}>
                            <MyButton name={"Close"} width={'150px'} background={"#000080"} hoverColor={"#008080"} onClick={close} />
                        </Box> */}
                    </Box>

                </Box>
            </Card>
        </Dialog>

    )
}
