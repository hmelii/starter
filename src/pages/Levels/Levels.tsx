import {FC} from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

import {Card} from "../../components/Card";
import {MainNav} from "../../components/MainNav";
import {ShopAll} from "../../components/ShopAll";

const initialState = [
    {
        id: 1,
        title: 'Laundry',
        href: '/levels/laundry'


    },
    {
        id: 2,
        title: 'Household',
        href: '/levels/household'

    }
]

export const Levels:FC = () => {
    return <Box sx={{paddingTop: '9.6rem'}}>
        <MainNav items={initialState} />

        <Box sx={{marginBottom: '4.8rem'}}>
            <ShopAll>Shop all</ShopAll>
        </Box>

        <Divider sx={{borderColor: '#AED9FF', marginBottom: '3.6rem'}} />

        <Card />
    </Box>
}