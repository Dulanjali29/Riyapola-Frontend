import { Box, Dialog } from '@mui/material'
import React from 'react'
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

export default function DialogCard({open,close,updateAdmin,updateData}) {
  return (
    <Dialog open={open} 
    TransitionComponent={Transition}
    keepMounted
    onClose={close}
    aria-describedby="alert-dialog-slide-description"
    >
     <Box>
        <h2>update admin</h2>
        </Box>   

    </Dialog>
  )
}
