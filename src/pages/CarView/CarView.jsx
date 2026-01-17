import React, { useState, useEffect } from 'react'
import { Autocomplete, Box, Button, colors, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import { DataGrid } from '@mui/x-data-grid';
import instance from '../../service/AxiosOrder';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Swal from 'sweetalert2';

import InputText from '../../common/InputText/InputText'
import MyButton from '../../common/Button/MyButton'
import CarCard from '../../component/CarCard/CarCard';
import { red } from '@mui/material/colors';

export default function CarView() {

  const [data, setData] = useState([])
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [passangers, setPassangers] = useState("");
  const [fueltype, setFuelType] = useState("");
  const [transmissionMode, setTransmissionMode] = useState("");
  const [dailyRentalPrice, setDailyRentalPrice] = useState("");
  const [status, setStatus] = useState("");
  const [image, setImage] = useState("");
  const [popup, setPopup] = useState(false)
  const [updateData, setUpdateData] = useState()
  const [errors, setErrors] = useState({});

  

  const openPopup = (val) => {
    setPopup(true)
    setUpdateData(val)
  }
  const closebtn = () => {
    setPopup(false)
    getAllCars()
  }

  { closebtn }

  const noOfpas = [
    { label: '1', value:'1' },
    { label: '2', value: '2'},
    { label: '3', value: '3'},
    { label: '4', value:'4' },
    { label: '5', value: '5'},
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
  
const validate = () => {
  let tempErrors = {};
  let isValid=true;
  
  if (!brand.trim()){
    tempErrors.brand ="Brand is required";
    isValid=false;
  } 
  if (!model.trim()){ tempErrors.model = "Model is required"};
  if (!passangers) {tempErrors.passangers = "Passengers required"};
  if (!fueltype) {tempErrors.fueltype = "Fuel type required"};
  if (!transmissionMode) {tempErrors.transmissionMode = "Transmission required"};

  if (!dailyRentalPrice) {
    tempErrors.dailyRentalPrice = "Price required";
  } else if (isNaN(dailyRentalPrice)) {
    tempErrors.dailyRentalPrice = "Must be a number";
  }

  if (!status) tempErrors.status = "Status required";
  if (!image) tempErrors.image = "Image required";

  setErrors(tempErrors);
  return Object.keys(tempErrors).length === 0;
};

  const saveCar = () => { 
  
     if (!validate()) {
    Swal.fire({
      icon: "error",
      title: "Validation Error",
      text: "Please fill all required fields correctly"
    });
    return;
  }else{
      instance.post("/car/carRegister", {
    
      brand: brand,
      model: model,
      noOfPassengers: passangers,
      fuelType: fueltype,
      transmissionMode: transmissionMode,
      dailyRentalPrice: dailyRentalPrice,
      status: status
     
    })

      .then(function (response) {
        console.log(response);
        const carIdForImage = response.data.carId;
      
        console.log(carIdForImage);

        const data = new FormData();
        data.append('images', image);
        data.append('carId', carIdForImage);

        instance.post("/image/addImage", data, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then(function (response) {
          console.log("image response" + response);
        })
          .catch(function (error) {
            console.log("image error is" + error);
          });

        alert("success", "car saved successfull!")
        clear()
        getAllCars();
      })
      .catch(function (error) {
        console.log("Error details: ", error.response ? error.response.data : error);

      });
  }
  }
  
  const handleUpload = (event) => {
    console.log(event.target.files[0]);
    setImage(URL.createObjectURL(event.target.files[0]))
    setImage(event.target.files[0])
  };

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
            onClick={() => {
              openPopup(params.row)

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
  const deleteCar = (id) => {


    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        instance.delete('/car/deleteCar/' + id)

          .then(response => {
            console.log(response)
            getAllCars()

          })
          .catch(error => {
            console.error(error);

          });
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }
  const getAllCars = () => {
    instance({
        method: 'get',
        url: '/car/getAllCar',
       
    })
    .then(function (response) {
        // console.log("Response data:", response.data); // Log the response to check structure

        if (Array.isArray(response.data)) {
       
            const array = response.data.map(val => ({
              
                id: val.carId,
                brand: val.brand,
                model: val.model,
                noOfpas: val.noOfPassengers,
                fueltype: val.fuelType,
                trMode: val.transmissionMode,
                dailyPrice: val.dailyRentalPrice,
                status: val.status,
                imId: val.carImgs && val.carImgs.length > 0 ? val.carImgs[0].imgId:null ,
                image: val.carImgs && val.carImgs.length > 0 ? val.carImgs[0].images:null // Handle images array
            }));

            setData(array);
            console.log(array);
        } else {
            console.error("Expected an array but got:", response.data);
        }
    })
    .catch(function (error) {
        console.error("Error fetching data:", error);
    });
};




useEffect(() => {
    getAllCars();
}, []);

  return (
    <Box>
      <Box>

      </Box>
      <Box sx={{ margin: '10px' }}>
        <Typography sx={{ fontSize: '30px', fontWeight: 'bold', color: '#000080' }}>
          Car Action
        </Typography>
      </Box>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Box>
              <InputText 
              label={"Brand Name"} 
              value={brand} 
              width={"100%"}
              type={'text'} 
              onChange={(val) => setBrand(val.target.value)} 
              
              />
           <Box >
           <Typography sx={{ fontSize: '15px', color: '#ce1111' }}>
             {errors.brand}
           </Typography>
           </Box>

            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box>
              <InputText label={"Model Name"} 
              value={model}
               width={"100%"} type={'text'} 
              onChange={(val) => setModel(val.target.value)} />
              <Box >
           <Typography sx={{ fontSize: '15px', color: '#ce1111' }}>
             {errors.model}
           </Typography>
           </Box>
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
                onChange={handleUpload}
                startIcon={<CloudUploadIcon />}
                sx={{ marginTop: '10px' }}
              >
                Upload Image
                <VisuallyHiddenInput type="file"  />
              </Button>
            </Box>
          </Grid>

        </Grid>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end', gap: 3 }}>
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

          {popup &&
            <CarCard open={popup} close={closebtn} updateData={updateData} imgId={updateData.imgId} />
          }
        </div>
      </Box>


    </Box>
  )
}
