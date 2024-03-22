import React from 'react'
import { Box ,Typography} from '@mui/material'
import {useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import instance from '../../service/AxiosOrder';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Customers() {
    const [data, setData] = useState([])
    const columns = [
        
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'firstname', headerName: 'First Name', width: 200 },
        { field: 'lastname', headerName: 'Last Name', width: 200 },
        { field: 'nic', headerName: 'NIC', width: 200 },
        { field: 'address', headerName: 'Address', width: 200 },
        { field: 'contact', headerName: 'Contact', width: 200 },
        { field: 'email', headerName: 'E-Mail', width: 200 },
        { field: 'dateTime', headerName: 'Date and Time', width: 200 },
        {
            field: 'action',
            headerName: 'Action',
            width: 200,
            renderCell: (params) => (
                <Box>

                    <IconButton
                        color='error'
                        aria-label="delete"
                        onClick={() => deleteAdmin(params.row.id)}
                    >
                        <DeleteIcon />
                    </IconButton>
                </Box>
            ),
        },
    ];

    useEffect(() => {
        getAllCustomers(setData)
    }, []);

    const getAllCustomers = () => {
        instance({
            method: 'get',
            url: 'customer/getAllCustomers',
        })
            .then(function (response) {

                const array = [];
                response.data.forEach(val => {
                    array.push({
                        id:val.customer_id,
                        firstname: val.firstName,
                        lastname: val.lastName,
                        nic: val.nic,
                        address: val.address,
                        contact: val.contact,
                        email: val.email,
                        dateTime: val.dateTime


                    });

                });

                setData(array);

            });
    }
    const deleteCustomer = (id) => {
        instance.delete('/delete/' + id)

            .then(response => {
                console.log(response)
                getAlldmin()

            })
            .catch(error => {
                console.error(error);

            });
    }
    return (
        <Box>
            <Box>
                <Typography
                    sx={{ flex: '1 1 100%', color: '#000080', marginTop: "20px" }}
                    variant="h5"
                    id="tableTitle"
                    component="div"
                >
                    Customer Details
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
