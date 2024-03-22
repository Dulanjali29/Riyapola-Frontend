import React, { useState,useEffect } from 'react'
import { Autocomplete, Box, Button, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import { DataGrid } from '@mui/x-data-grid';
import instance from '../../service/AxiosOrder';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import InputText from '../../common/InputText/InputText'
import MyButton from '../../common/Button/MyButton'

export default function CarView() {
  
  const [data, setData] = useState([])
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [passangers, setPassangers] = useState("");
  const [fueltype, setFuelType] = useState("");
  const [transmissionMode, setTransmissionMode] = useState("");
  const [dailyRentalPrice, setDailyRentalPrice] = useState("");
  const [status, setStatus] = useState("");

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

  const saveCar = () => {
    instance.post('/car/carRegister', {

      brand: brand,
      model: model,
      noOfPassangers:passangers,
      fuelType: fueltype,
      transmissionMode: transmissionMode,
      dailyRentalPrice:dailyRentalPrice,
      status:status,
  })
      .then(function (response) {
          console.log(response);
          clear()
          getAllCars();
      })
      .catch(function (error) {
          console.log(error);

      });
  }
  const clear = () => {
    setBrand("");
    setModel("");
    setPassangers("");
    setFuelType("");
    setTransmissionMode("");
    setDailyRentalPrice("");
    setStatus("");

  }
  const columns = [
    { field: 'id', headerName: 'ID ', width: 150 },
    { field: 'brand', headerName: 'Brand ', width: 150 },
    { field: 'model', headerName: 'Model ', width: 150 },
    { field: 'noOfpas', headerName: 'Passangers', width: 150 },
    { field: 'fueltype', headerName: 'Fuel Type', width: 150 },
    { field: 'trMode', headerName: 'Transmission Type', width: 200 },
    { field: 'dailyPrice', headerName: 'Daily Rental Price', width: 150 },
    { field: 'status', headerName: 'Status', width: 150 },
    {
      field: 'actions',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => (
        <div>
          <IconButton
            color='info'
            aria-label="edit"
            onClick={() => { clickOpen(params.row) 
          
            }}
          >
            <EditIcon />
          </IconButton>

          <IconButton
            color='error'
            aria-label="delete"
            onClick={() => { deleteCar(params.row.id) }}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      ),
    },
  ];
  const getAllCars = () => {
    instance({
        method: 'get',
        url: '/car/getAllCar',
    })
        .then(function (response) {

            const array = [];
            response.data.forEach(val => {
                array.push({
                    id: val.car_id,
                    brand: val.brand,
                    model: val.model,
                    passangers: val.noOfPassengers,
                    fueltype: val.fuelType,
                    trMode: val.transmissionMode,
                    dailyPrice:val.dailyRentalPrice,
                    status:val.status,

                });

            });

            setData(array);

        });
}
useEffect(() => {
    getAllCars(setData)
}, []);
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
                options={noOfpas}
                sx={{ width: '100%' }}
                value={passangers}
                renderInput={(params) => <TextField {...params} label="Number Of Passengers" />}
                onChange={(event, value) => setPassangers(value.value)}
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
                onChange={(event, value) => setStatus(value.value)}
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
      <Box>
                <Typography
                    sx={{ flex: '1 1 100%', color: '#000080', marginTop: "20px" }}
                    variant="h5"
                    id="tableTitle"
                    component="div"
                >
                    Cars Details
                </Typography>
                <div style={{ height: 400, width: '100%', paddingTop: 30 }}>
                    <DataGrid
                        rows={data}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: { page: 0, pageSize: 10 },
                            },
                        }}
                        pageSizeOptions={[5, 10]}
                        checkboxSelection
                    />

                    
                </div>
            </Box>


    </Box>
  )
}
