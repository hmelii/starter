import {FC} from "react";
import Box from "@mui/material/Box";


export const Main: FC = ({children}) => {
    return <Box sx={{padding: '0 4.8rem 4.8rem'}}>{children}</Box>
}