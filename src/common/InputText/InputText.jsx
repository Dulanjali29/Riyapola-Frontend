import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function inputText({label,value,onChange,width}){
return(
    <TextField id="outlined-basic" label={label} variant="outlined"  value={value } onChange={onchange} sx={{width,marginBottom:"20px"}} />
)
}