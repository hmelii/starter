import { FC } from 'react'

import { Box, List } from '@mui/material'
import { Item } from './Item'

type ItemTypeProp = {
  id: number
  title: string
  href: string
}

type NavTypeProp = {
  items: ItemTypeProp[]
}

export const Nav: FC<NavTypeProp> = ({ items }) => {
  return (
    <Box>
      <nav>
        <List>
          {items.map(({ id, ...rest }) => (
            <Item key={id} {...rest} />
          ))}
        </List>
      </nav>
    </Box>
  )
}
