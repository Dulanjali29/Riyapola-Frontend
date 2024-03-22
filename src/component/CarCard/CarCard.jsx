
import { Box } from '@mui/material'
import React from 'react'
import Dialog from '@mui/material/Dialog'
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function CarCard({ open, close, updateData }) {
    return (
        <Dialog open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={close}
            aria-describedby="alert-dialog-slide-description"
        >
            <Box>
                hi
            </Box>
        </Dialog>
        
    )
}