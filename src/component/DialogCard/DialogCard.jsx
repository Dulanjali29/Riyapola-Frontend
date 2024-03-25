import { Box, Card, Dialog, Grid } from '@mui/material'
import React from 'react'
import Slide from '@mui/material/Slide';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import InputText from '../../common/InputText/InputText';
import IconButton from '@mui/material/IconButton';
import MyButton from '../../common/Button/MyButton';
import instance from '../../service/AxiosOrder';
import Alert from '../../common/Alert/Alert';
import Swal from 'sweetalert2';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogCard({ open, close, updateData}) {

    const [firstName, setFirstName] = useState(updateData?.firstname)
    const [lastName, setLastName] = useState(updateData?.lastname)
    const [userName, setUserName] = useState(updateData?.username)
    const [password, setPassword] = useState(updateData?.password)

    
    const save = () => {
        if (firstName && lastName && userName && password != null) {
            instance.put('admin/updateAdmin/' + updateData.id, {
                firstName: firstName,
                lastName: lastName,
                userName: userName,
                password: password,
                role: "Admin",

            })
                .then(function (response) {
                    console.log(response);
                    
                 
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "admin updated!",
                        showConfirmButton: false,
                        timer: 1500
                      });
                      close()
                    clear()

                })
                .catch(function (error) {
                    console.log(error);

                });
        } else {
            Alert("error", "Please enter data!")
        }


    }
  
    const clear = () => {
        setFirstName("");
        setLastName("");
        setUserName("");
        setPassword("");

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
                                    <InputText label={"Password"} value={password} width={"100%"} type={'password'} onChange={(val) => setPassword(val.target.value)} />
                                </Box>

                            </Grid>


                        </Grid>
                    </Box>

                    <Box sx={{ display: "flex", justifyContent: "end", gap: "10px", marginLeft: "10px" }}>
                        <Box sx={{}}>
                            <MyButton name={"Save"} width={'150px'} background={"#008000"} hoverColor={"#5D6D7E "} onClick={save} />
                        </Box>
                     

                    </Box>

                </Box>
            </Card>
        </Dialog>

    )
}
