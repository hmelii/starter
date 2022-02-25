import { FC } from 'react'

import { Box, List } from '@mui/material'
import { Item } from './Item'
import { ItemTypeProp } from '../../types'

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
