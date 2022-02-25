import { FC, useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'

import { Card } from '../../components/Card'
import { ShopAll } from '../../components/ShopAll'
import { Heading } from '../../components/Heading'
import { Nav } from '../../components/Nav'
import { useRoute } from '../../hooks/useRoute'
import { DataTypeProps, ItemTypeProp } from '../../types'

const initialState = {
  laundry: {
    title: 'Laundry',
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
      }
    ],
    card: {
      title: 'Senstive Skin & Baby Detergent',
      summary:
        '"Doesn\'t irritate my reactive skin & leaves clothes as clean as the big-brand detergents!"',
      image: 'https://www.fillmurray.com/72/72'
    }
  },
  household: {
    title: 'Household',
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
      }
    ],
    card: {
      title: 'Dishwasher Detergent',
      summary:
        '“They clean really well and I no longer have to use any rinse aid.”',
      image: 'https://www.fillmurray.com/72/72'
    }
  }
}

type LevelTypeProps = {
  title: string
  card: null | DataTypeProps
  menu: ItemTypeProp[]
}

export const Level: FC = () => {
  const { param, parseParam } = useRoute()
  const [data, setData] = useState<null | LevelTypeProps>(null)

  useEffect(() => {
    parseParam()
  }, [])

  useEffect(() => {
    if (param) {
      // @ts-ignore
      setData(initialState[param])
    }
  }, [param])

  if (!data) {
    return null
  }

  const { title = '', card = null, menu = [] } = data

  return (
    <Box
      sx={{
        padding: '0 4.8rem 4.8rem',
        minHeight: '100vh',
        boxSizing: 'border-box',
        backgroundColor: '#fff'
      }}
    >
      <Box sx={{ margin: '0 -4.8rem 2.9rem' }}>
        <Heading>{title}</Heading>
      </Box>
      <Nav items={menu} />

      <Box sx={{ marginBottom: '4.8rem' }}>
        <ShopAll>Shop All {title}</ShopAll>
      </Box>

      <Divider sx={{ borderColor: '#AED9FF', marginBottom: '3.6rem' }} />

      {card && <Card heading="Best Sellers" data={card} />}
    </Box>
  )
}
