
import { Box, Card,IconButton} from '@mui/material'
import React from 'react'
import Dialog from '@mui/material/Dialog'
import Slide from '@mui/material/Slide';
import CloseIcon from '@mui/icons-material/Close';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function CarCard({ open, close, updateData ,updateCar}) {
  
    return (
        <Dialog open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={close}
            aria-describedby="alert-dialog-slide-description"
        >
            <Card sx={{ minwidth: "1000px", maxWidth: "1400", height: "400px", padding: 5 }}>
            <Box sx={{ marginTop: "-40px", marginLeft: "520px", cursor: "pointer" }}>
                    <IconButton
                        color='error'
                        aria-label="close"
                        onClick={close}
                    >
                        <CloseIcon />
                    </IconButton>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', color: '#4169E1', marginTop: "-10px", marginBottom: "10px" }}>
                    <h1 >Update Car Information</h1>
                </Box >
            </Card>
        </Dialog>
        
    )
}