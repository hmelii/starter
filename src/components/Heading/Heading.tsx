import React, {FC} from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {BackButton} from "../BackButton";

export const Heading:FC = ({children}) => {
    return (
        <Box sx={{backgroundColor: '#004CBD', height: '6.4rem', position: 'relative', alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
            <Box sx={{position: 'absolute', left: 0, top: 0, zIndex: 1}}>
            <BackButton/>
            </Box>
            <Typography variant="h1" component="h1" sx={{fontSize: '1.6rem', color: '#fff', lineHeight: 1, textAlign: 'center', letterSpacing: '0.16em',  fontWeight: 600, textTransform: 'uppercase'}}>{children}</Typography>
        </Box>
    )
}