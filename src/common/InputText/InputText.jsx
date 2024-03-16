import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';

export default function InputText({ label, value, onChange, width, type }) {
    return (
        <Box>
            <TextField id="outlined-basic" label={label} variant="outlined" type={type} value={value} onChange={onchange} sx={{ width, marginBottom: "20px" }} />
        </Box>

    )
}