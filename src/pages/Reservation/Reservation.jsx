import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useEffect } from 'react';
import { useState } from 'react';
import instance from '../../service/AxiosOrder';
import Swal from 'sweetalert2';


export default function Reservation() {
    const [row, setRow] = useState([])
    const columns = [
        { field: 'id', headerName: 'ID', width: 50 },
        { field: 'startDate', headerName: 'Start Date', width: 110 },
        { field: 'startTime', headerName: 'Start Time', width: 110 },
        { field: 'endDate', headerName: 'End Date', width: 110 },
        { field: 'endTime', headerName: 'End Time', width: 110 },
        { field: 'pickUpLocation', headerName: 'Pick Up Location', width: 140 },
        { field: 'carId', headerName: 'Car Id', width: 70 },
        { field: 'customerId', headerName: 'Cus Id', width: 70 },
        { field: 'status', headerName: 'Status', width: 100 },
        {
            field: 'action',
            headerName: 'Approve',
            sortable: false,
            width: 130,
            renderCell: (params) => (
                <IconButton
            color='info'
            aria-label="send"
            onClick={() => sentMail(params.row)}
          >
            <SendIcon />
          </IconButton>
            ),
        },
        {
            field: 'declineAction',
            headerName: 'Decline',
            sortable: false,
            width: 130,
            renderCell: (params) => (
                <IconButton
            color='error'
            aria-label="decline"
            onClick={() => declineMail(params.row)}
          >
            <HighlightOffIcon />
          </IconButton>
            ),
        },
    ];
 
    const sentMail=async(reservation)=>{
     
        console.log("id-"+reservation.customerId);
    const url='/customer/search_customer/'+reservation.customerId;

    try {
     
        const response = await instance.get(url);
        
        const customerEmail = response.data.email;
        console.log(customerEmail);
        const subject = await Swal.fire({
          title: 'Enter Email Subject',
          input: 'text',
          inputPlaceholder: 'Subject',
          showCancelButton: true
        }).then((result) => {
          return result.value;
        });
    
        if (subject) {
          const message = await Swal.fire({
            title: 'Email Message',
            input: 'textarea',
            
            inputPlaceholder: 'Type Your Message Here...',
          
            showCancelButton: true
          }).then((result) => {
            return result.value;
          });
    
          if (message) {
            const emailData = {
              toMail: customerEmail,
              subject: subject,
              message:message
            };
    
            await instance.post('/reservation/send/mail', emailData);
            Swal.fire("Email Sent Successfully!");
            window.location.reload();

           
          } else {
            Swal.fire("Please enter a message.");
          }
        } else {
          Swal.fire("Please enter a subject.");

        }
    } catch (error) {
    console.log(error);  
    Swal.fire("Error sending email!", error.message, "error"); 
    }  
    
       const updateData = {
              status: "approved"
            };

      instance({
        method: 'put',
        url: '/reservation/reservationUpdate/' + reservation.id,
        data: updateData
      })
        .then(function (response) {
          console.log(response);
          
        })
        .catch(function (error) {
          console.log(error);
        });


    instance({
     method: 'put',
     url: '/reservation/updateReservation/' + reservation.id,
     data: updateData
    })
    .then(function (response) {
        console.log(response);
    
     })
    .catch(function (error) {
        console.log(error);
    });
};

  
    useEffect(() => {
        getReservations();
    }, []);
  
        const getReservations = () => {
          instance.get("/reservation/getAllReservation")
          .then(function(response){
            
            const array = [];
            response.data?.map((val) => {
              array.push({
                  id: val.reservationId,
                  startDate: val.startDate,
                  startTime: val.startTime,
                  endDate: val.endDate,
                  endTime: val.endTime,
                  pickUpLocation: val.picUpLocation,
                  carId: val.carId,
                  customerId: val.customer_id,
                  status: val.status,
              })
            })
            setRow(array);
            console.log("array is ",array);
          })
          .catch(function (error){
            console.log("your error is",error);
          })
        }
       
    return (
        <Box sx={{ height: 700, width: '100%' }}>
            <Box sx={{ boxShadow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '12px 15px', borderBottom: '1px solid #ddd', background: "#7FB3D5", }}>



                <Typography
                    sx={{ flex: '1 1 100%', color: '#000080', marginTop: "0px" }}
                    variant="h4"
                    id="tableTitle"
                    component="div"
                >
                    Reservation
                </Typography>
            </Box>
            <br />

            <DataGrid
                rows={row}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 10 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </Box>
    )

}
