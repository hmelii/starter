import { FC } from 'react'
import { Box, List } from '@mui/material'
import { Item } from './Item'

type ItemTypeProps = {
  id: number
  title: string
  href: string
}

type ItemsTypeProps = {
  items: ItemTypeProps[]
}

export const MainNav: FC<ItemsTypeProps> = ({ items = [] }) => {
  return (
    <Box>
      <nav aria-label="main mailbox folders">
        <List>
          {items.map(({ id, ...rest }) => (
            <Item key={id} {...rest} />
          ))}
        </List>
      </nav>
    </Box>
  )
}
