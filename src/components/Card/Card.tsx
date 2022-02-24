import {FC} from "react";
import {default as MuiCard} from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import {Link} from "../Link";
import Typography from "@mui/material/Typography";


export const Card: FC = () => {
    return (
        <MuiCard sx={{border: 0, boxShadow: 'none'}}>
            <Box  sx={{ paddingTop: '1.3rem', marginBottom: '2.2rem'}}>
                <Typography variant="h3" component="h3" sx={{fontSize: '1.4rem', fontWeight: 600, textTransform: 'uppercase'}}>
                    Senstive Skin & Baby Detergent</Typography>
            </Box>
            <Box sx={{display: 'flex' }}>
            <CardMedia
                component="img"
                sx={{width: 72, flex: '0 1 72'}}
                image="/images/pic1.jpg"
                alt=""
            />
            <Box sx={{paddingLeft: '1.6rem', flex: '1 1 auto'}}>
                "Knocks out stink and smells even after clothes have stewed for days. Amazing stuff."
            </Box>
            </Box>

            <Box sx={{ paddingTop: '1.3rem'}}>
                <Link styles={{textDecoration: 'none'}} href="/">Senstive Skin & Baby Detergent</Link>
            </Box>
        </MuiCard>
    )

}