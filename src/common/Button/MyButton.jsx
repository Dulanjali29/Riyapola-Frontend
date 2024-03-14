
import React from 'react'
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export default function MyButton({name,width,onClick, background,hoverColor}) {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(background),
    backgroundColor: background,
    '&:hover': {
      backgroundColor: hoverColor,
    },
  }));
  return (
    <Box>
        <ColorButton variant='contained'  sx={{width:{width}}} onClick={onClick}>{name}</ColorButton>
    </Box>
    
  )
}