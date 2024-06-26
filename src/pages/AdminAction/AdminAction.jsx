import { Alert, Box, Grid, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import instance from '../../service/AxiosOrder';
import Swal from 'sweetalert2';


import InputText from '../../common/InputText/InputText'
import MyButton from '../../common/Button/MyButton'
import DialogCard from '../../component/DialogCard/DialogCard';

export default function AdminAction() {
    const [data, setData] = useState([])
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [userName, setUserName] = useState("")
    const [password, setpassword] = useState("")
    const [role, setRole] = useState("")

    const [popup, setPopup] = useState(false)
    const [updateData, setUpdateData] = useState()

    // const updateAdmin=()=>{

    //     getAlldmin()
    //     closePopup()
    // }
    const openPopup = (val) => {
        setPopup(true)
        setUpdateData(val)
    }
    const closebtn = () => {
        setPopup(false)
        getAlldmin()
    }
    { closebtn }
    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'firstname', headerName: 'First Name', width: 200 },
        { field: 'lastname', headerName: 'Last Name', width: 200 },
        { field: 'username', headerName: 'User Name', width: 200 },
        { field: 'role', headerName: 'Role', width: 200 },
        {
            field: 'action',
            headerName: 'Action',
            width: 200,
            renderCell: (params) => (
                <Box>


                    <IconButton
                        color='success'
                        aria-label="edit"
                        onClick={() => { openPopup(params.row) }}
                    >
                        <EditIcon />
                    </IconButton>
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

    const save = () => {
        if (firstName && lastName && userName && password && role != null) {
            instance.post('/admin/saveAdmin', {

                firstName: firstName,
                lastName: lastName,
                userName: userName,
                password: password,
                role: role
            })
                .then(function (response) {
                    console.log(response);
                    clear()
                    getAlldmin();
                    Alert("success", "adminsaved successful !")
                })
                .catch(function (error) {
                    console.log(error);

                });
        } else {
            Alert("error", "Please Enter Data !")
        }

    }
    const deleteAdmin = (id) => {
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
                instance.delete('/admin/deleteAdmin/' + id)

                    .then(response => {
                        console.log(response)
                        getAlldmin()

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
    const clear = () => {
            setFirstName(""),
            setLastName(""),
            setUserName(""),
            setpassword(""),
            setRole("");
            
    }
    const getAlldmin = () => {
        instance({
            method: 'get',
            url: '/admin/getAllAdmin',
        })
            .then(function (response) {

                const array = [];
                response.data.forEach(val => {
                    array.push({
                        id: val.admin_id,
                        firstname: val.firstName,
                        lastname: val.lastName,
                        username: val.userName,
                        password: val.password,
                        role: val.role,

                    });

                });

                setData(array);

            });
    }

    useEffect(() => {
        getAlldmin(setData)
    }, []);
    
    return (
        <Box>
            <Box>
                <Box sx={{ margin: '10px' }}>
                    <Typography sx={{ fontSize: '30px', fontWeight: 'bold', color: '#000080' }}>
                        Admin Action
                    </Typography>
                </Box>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <Box  >
                            <InputText label={"First Name"} value={firstName} width={"100%"} type={'text'} onChange={(val) => setFirstName(val.target.value)} />
                        </Box>

                    </Grid>
                    <Grid item xs={3}>
                        <Box>
                            <InputText label={"Last Name"} value={lastName} width={"100%"} type={'text'} onChange={(val) => setLastName(val.target.value)} />
                        </Box>

                    </Grid>
                    <Grid item xs={3}>
                        <Box>
                            <InputText label={"User Name"} value={userName} width={"100%"} type={'text'} onChange={(val) => setUserName(val.target.value)} />
                        </Box>

                    </Grid>
                    <Grid item xs={3}>
                        <Box>
                            <InputText label={"Password"} value={password} width={"100%"} type={'password'} onChange={(val) => setpassword(val.target.value)} />
                        </Box>

                    </Grid>
                    <Grid item xs={3}>
                        <Box>
                            <InputText label={"Role"} value={role} width={"100%"} type={'text'} onChange={(val) => setRole(val.target.value)} />
                        </Box>

                    </Grid>

                </Grid>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "end", gap: "10px" }}>
                <Box sx={{}}>
                    <MyButton name={"Save"} width={'200px'} background={"#512E5F"} hoverColor={"#5D6D7E "} onClick={save} />
                </Box>
                <Box sx={{}}>
                    <MyButton name={"Clear"} width={'200px'} background={"#000080"} hoverColor={"#008080"} onClick={clear} />
                </Box>
            </Box>
            <Box>
                <Typography
                    sx={{ flex: '1 1 100%', color: '#000080', marginTop: "20px" }}
                    variant="h5"
                    id="tableTitle"
                    component="div"
                >
                    Admin Details
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
                        <DialogCard open={popup} close={closebtn} updateData={updateData} />
                    }
                </div>
            </Box>
        </Box>
    )
}
