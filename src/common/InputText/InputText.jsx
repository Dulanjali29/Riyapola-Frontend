import * as React from 'react';
import {TextField} from '@mui/material';

export default function inputText({label,value,onChange,width,type}){
return(
    <TextField id="outlined-basic" label={label} variant="outlined" type={type}  value={value } onChange={onchange} sx={{width,marginBottom:"20px"}} />
)
}