import { FC } from 'react'
import { ListItem, ListItemIcon, ListItemText } from '@mui/material'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded'
import { Link } from '../Link'

type ItemPropTypes = {
  title: string
  href: string
}

export const Item: FC<ItemPropTypes> = ({ title, href }) => {
  return (
    <ListItem disablePadding>
      <Link
        styles={{
          textDecoration: 'none',
          padding: '2.4rem 0',
          flex: '1 1 100%',
          display: 'flex',
          justifyContent: 'space-between'
        }}
        href={href}
      >
        <ListItemText
          disableTypography
          sx={{
            fontSize: '1.6rem',
            margin: 0,
            textTransform: 'uppercase',
            letterSpacing: '0.16em',
            fontWeight: 600,
            lineHeight: 1
          }}
        >
          {title}
        </ListItemText>
        <ListItemIcon sx={{ minWidth: 0 }}>
          <ArrowForwardIosRoundedIcon
            sx={{
              color: '#004CBD',
              width: '2rem'
            }}
          />
        </ListItemIcon>
      </Link>
    </ListItem>
  )
}
