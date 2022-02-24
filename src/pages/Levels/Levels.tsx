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

const data = {
    title: 'Active Wash Detergent',
    summary: '"Knocks out stink and smells even after clothes have stewed for days. Amazing stuff."',
    image: '/images/pic1.jpg'
}

export const Levels: FC = () => {
    return (
            <Box sx={{padding: '9.6rem 4.8rem 4.8rem', minHeight: '100vh',  boxSizing: 'border-box', backgroundColor: '#fff'}}>
            <MainNav items={initialState}/>

            <Box sx={{marginBottom: '4.8rem'}}>
                <ShopAll>Shop all</ShopAll>
            </Box>

            <Divider sx={{borderColor: '#AED9FF', marginBottom: '3.6rem'}}/>

            <Card heading="Featured" data={data}/>
        </Box>
    )
}