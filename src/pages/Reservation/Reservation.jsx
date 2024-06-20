import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useEffect } from 'react';
import instance from '../../service/AxiosOrder';
import { useState } from 'react';
import Button from '@mui/material/Button';

import Swal from 'sweetalert2'
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


    
    
    return (
        <Box sx={{ height: 400, width: '100%' }}>
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
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </Box>
    )

}
