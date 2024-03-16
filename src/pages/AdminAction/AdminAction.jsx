import { Box, Grid } from '@mui/material'
import React, { useState } from 'react'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import { DataGrid } from '@mui/x-data-grid';

import InputText from '../../common/InputText/InputText'
import MyButton from '../../common/Button/MyButton'

export default function AdminAction() {
    const [data, setData] = useState([])
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [userName, setUserName] = useState("")
    const [password, setpassword] = useState("")

    const columns = [
      
        { field: 'firstName', headerName: 'First Name', width: 200 },
        { field: 'lastName', headerName: 'Last Name',  width: 200 },
        { field: 'userName', headerName: 'UserName', width: 200 },
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
                onClick={() => deleteStudent(params.row.id)}
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          ),
        },
      ];

    const save = () => {

    }
    const clear = () => {

    }
    return (
        <Box>
            <Box>
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
                    <Grid item xs={1}>
                        <Box>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={[{label:"Admin"},{label:"Customer"}]}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="Role" />}
                            />
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
            <div style={{ height: 400, width: '80%', paddingTop: 30 }}>
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
