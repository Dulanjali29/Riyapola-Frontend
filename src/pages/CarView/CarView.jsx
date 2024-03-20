import React, { useState } from 'react'
import { Autocomplete, Box, Button, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';

import InputText from '../../common/InputText/InputText'
import MyButton from '../../common/Button/MyButton'

export default function CarView() {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [noOfPassangers, setNoOfPassangers] = useState("");
  const [fueltype, setFuelType] = useState("");
  const [transmissionMode, setTransmissionMode] = useState("");
  const [dailyRentalPrice, setDailyRentalPrice] = useState("");
  const [status, setStatus] = useState("");

  const numberOfSeats = [
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

  const saveCar = () => {

  }
  const clear = () => {
    setBrand("");
    setModel("");
    setNoOfPassangers("");
    setFuelType("");
    setTransmissionMode("");
    setDailyRentalPrice("");
    setStatus("");
  }

  return (
    <Box>
      <Box>

      </Box>
      <Box>
        <Typography>
          Car Action
        </Typography>
      </Box>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Box>
              <InputText label={"Brand Name"} value={brand} width={"100%"} type={'text'} onChange={(val) => setBrand(val.target.value)} />
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box>
              <InputText label={"Model Name"} value={model} width={"100%"} type={'text'} onChange={(val) => setModel(val.target.value)} />
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={numberOfSeats}
                sx={{ width: '100%' }}
                value={noOfPassangers}
                renderInput={(params) => <TextField {...params} label="Number Of Passengers" />}
                onChange={(event, value) => setNoOfPassangers(value.value)}
              />
            </Box>
          </Grid>
          <Grid item xs={2}>
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
          <Grid item xs={2}>
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
          <Grid item xs={2}>
            <Box>
              <InputText label={"Daily Rental Price"} value={dailyRentalPrice} width={"100%"} type={'text'} onChange={(val) => setDailyRentalPrice(val.target.value)} />
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={st}
                sx={{ width: '100%' }}
                value={status}
                renderInput={(params) => <TextField {...params} label="Availability" />}
                onChange={(event, value) => setTransmissionMode(value.value)}
              />
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box>
              <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
              >
                Upload Image
                <VisuallyHiddenInput type="file" />
              </Button>
            </Box>
          </Grid>

        </Grid>
        <Box sx={{display:'flex',alignItems:'center',justifyContent:'end',gap:3}}>
          <Box>
            <MyButton name={"Save"} width={'200px'} background={"#196F3D"} hoverColor={"#76D7C4  "} onClick={saveCar} />
          </Box>
          <Box>
            <MyButton name={"Clear"} width={'200px'} background={"#EB984E"} hoverColor={"#F5CBA7 "} onClick={clear} />
          </Box>
        </Box>
      </Box>

      
    </Box>
  )
}
