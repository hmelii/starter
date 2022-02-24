import {FC, useEffect, useMemo, useState} from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

import {Card} from "../../components/Card";
import {ShopAll} from "../../components/ShopAll";
import {Heading} from "../../components/Heading";
import {Nav} from "../../components/Nav";
import {useRoute} from "../../hooks/useRoute";


const initialState = {
    laundry: {
        title:  'Laundry',
        menu: [
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
        ],
        card: {
            title: 'Senstive Skin & Baby Detergent',
            summary: '"Doesn\'t irritate my reactive skin & leaves clothes as clean as the big-brand detergents!"',
            image: '/images/pic1.jpg'

        }

    },
    household: {
        title:  'Household',
        menu: [
            {
                id: 1,
                title: 'Dishwasher Detergent',
                href: '/'
            },
            {
                id: 2,
                title: 'Dish Soap',
                href: '/'
            },
            {
                id: 3,
                title: 'Air Freshener',
                href: '/'
            },
            {
                id: 4,
                title: 'Household Extras',
                href: '/'
            },
        ],
        card: {
            title: 'Dishwasher Detergent',
            summary: '“They clean really well and I no longer have to use any rinse aid.”',
            image: '/images/pic1.jpg'

        }

    }
}

export const Level: FC = () => {
    const {param, parseParam} = useRoute()
    const [items, setItems] = useState([])
    const [title, setTitle] = useState('')
    const [card, setCard] = useState(null)
    useEffect(() => {
        if (param) {
            console.log('param', param)
        }
    }, [param])

    useEffect(() => {
        parseParam()
    }, [parseParam])

    useEffect(() => {
        if (param) {
            const {menu = [], title = '', card = {}} = initialState[param]
            setItems(menu)
            setTitle(title)
            // @ts-ignore
            setCard(card)
        }
    }, [param])


    return (
        <Box>
            <Box sx={{margin: '0 -4.8rem 2.9rem'}}>
                <Heading>
                    {title}
                </Heading>
            </Box>
            <Nav items={items}/>

            <Box sx={{marginBottom: '4.8rem'}}>
                <ShopAll>Shop All  {title}</ShopAll>
            </Box>

            <Divider sx={{borderColor: '#AED9FF', marginBottom: '3.6rem'}}/>

            {card && <Card heading="Best Sellers" data={card} /> }
        </Box>
    )
}