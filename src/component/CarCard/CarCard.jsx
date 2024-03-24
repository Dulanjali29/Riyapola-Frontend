
import { Box, Card, IconButton,Grid,Autocomplete } from '@mui/material'
import React from 'react'
import Dialog from '@mui/material/Dialog'
import Slide from '@mui/material/Slide';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import TextField from '@mui/material/TextField';

import InputText from '../../common/InputText/InputText';
import MyButton from '../../common/Button/MyButton';
import instance from '../../service/AxiosOrder';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function CarCard({ open, close, updateData, updateCar }) {
    const [brand, setBrand] = useState(updateData?.brand);
    const [model, setModel] = useState(updateData?.model);
    const [passangers, setPassangers] = useState(updateData?.noOfpas);
    const [fueltype, setFuelType] = useState(updateData?.fueltype);
    const [transmissionMode, setTransmissionMode] = useState(updateData?.trMode);
    const [dailyRentalPrice, setDailyRentalPrice] = useState(updateData?.dailyPrice);
    const [status, setStatus] = useState(updateData?.status);

    const noOfpas = [
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
        { label: '4', value: '4' },
        { label: '5', value: '5' },
        { label: '6', value: '6' },
        { label: '7', value: '7' },
        { label: '8', value: '8' },
    
      ]
      const fuelType = [
        { label: 'Petrol', value: 'Petrol' },
        { label: 'Diesel ', value: 'Diesel ' },
        { label: 'Hybrid', value: 'Hybrid' }
      ]
      const trMode = [
        { label: 'Autol', value: 'Auto' },
        { label: 'Manual', value: 'Manual ' },
    
      ]
      const st = [
        { label: 'Available', value: 'Available' },
        { label: 'Not Available', value: 'Not Available' }
      ]
      const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
      });

      const saveCar=()=>{
        instance.put('/car/updateCar/'+updateData.id, {

            brand: brand,
            model: model,
            noOfPassangers: passangers,
            fuelType: fueltype,
            transmissionMode: transmissionMode,
            dailyRentalPrice: dailyRentalPrice,
            status: status,
          })
            .then(function (response) {
              console.log(response);
              updateCar()
              clear()
              getAllCars();
            })
            .catch(function (error) {
              console.log(error);
      
            });
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
            <Card >
               
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
                    <h1 >Update Car Information</h1>
                </Box >
                <Box sx={{margin:'10px'}}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Box>
                                <InputText label={"Brand Name"} value={brand} width={"100%"} type={'text'} onChange={(val) => setBrand(val.target.value)} />
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box>
                                <InputText label={"Model Name"} value={model} width={"100%"} type={'text'} onChange={(val) => setModel(val.target.value)} />
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box>
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={noOfpas}
                                    sx={{ width: '100%' }}
                                    value={passangers}
                                    renderInput={(params) => <TextField {...params} label="Number Of Passengers" />}
                                    onChange={(event, value) => setPassangers(value.value)}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box>
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={fuelType}
                                    sx={{ width: '100%' }}
                                    value={fueltype}
                                    renderInput={(params) => <TextField {...params} label="Fuel Type" />}
                                    onChange={(event, value) => setFuelType(value.value)}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box>
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={trMode}
                                    sx={{ width: '100%' }}
                                    value={transmissionMode}
                                    renderInput={(params) => <TextField {...params} label="Transmission Type" />}
                                    onChange={(event, value) => setTransmissionMode(value.value)}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box>
                                <InputText label={"Daily Rental Price"} value={dailyRentalPrice} width={"100%"} type={'text'} onChange={(val) => setDailyRentalPrice(val.target.value)} />
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box>
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={st}
                                    sx={{ width: '100%' }}
                                    value={status}
                                    renderInput={(params) => <TextField {...params} label="Availability" />}
                                    onChange={(event, value) => setStatus(value.value)}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box>
                                <Button
                                    component="label"
                                    role={undefined}
                                    variant="contained"
                                    tabIndex={-1}
                                    startIcon={<CloudUploadIcon />}
                                    sx={{marginTop:'10px'}}
                                >
                                    Upload Image
                                    <VisuallyHiddenInput type="file" />
                                </Button>
                            </Box>
                        </Grid>

                    </Grid>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end', gap: 3 ,marginTop:'20px'}}>
                        <Box>
                            <MyButton name={"Save"} width={'200px'} background={"#196F3D"} hoverColor={"#76D7C4  "} onClick={saveCar} />
                        </Box>
                        <Box>
                            <MyButton name={"Clear"} width={'200px'} background={"#EB984E"} hoverColor={"#F5CBA7 "} onClick={clear} />
                        </Box>
                    </Box>
                </Box>
                
            </Card>
        </Dialog>

    )
}