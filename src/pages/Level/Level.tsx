import {FC} from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

import {Card} from "../../components/Card";
import {ShopAll} from "../../components/ShopAll";
import {Heading} from "../../components/Heading";
import {Nav} from "../../components/Nav";


const initialState = [
    {
        id: 1,
        title: 'Laundry Detergent',
        href: '/'
    },
    {
        id: 2,
        title: 'Fabric Softener',
        href: '/'
    },
    {
        id: 3,
        title: 'Fabric Refresher',
        href: '/'
    },
    {
        id: 4,
        title: 'Laundry Extras',
        href: '/'
    },

]

export const Level: FC = () => {
    return (
        <Box>
            <Box sx={{margin: '0 -4.8rem 2.9rem'}}>
                <Heading>
                    Laundry
                </Heading>
            </Box>
            <Nav items={initialState}/>

            <Box sx={{marginBottom: '4.8rem'}}>
                <ShopAll>Shop All Laundry</ShopAll>
            </Box>

            <Divider sx={{borderColor: '#AED9FF', marginBottom: '3.6rem'}}/>

            <Card/>
        </Box>
    )
}