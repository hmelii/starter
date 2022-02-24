import { FC } from 'react'
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded'
import { Link } from '../Link'
import { blue } from '@mui/material/colors'

const backButtonStyles = {
  width: '6.4rem',
  height: '6.4rem',
  padding: 0,
  color: 'white',
  transition: 'all 150ms ease',
  cursor: 'pointer',
  border: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '&:hover': {
    backgroundColor: `${blue[600]}`
  }
}

export const BackButton: FC = () => {
  return (
    <Link href="/" styles={backButtonStyles}>
      <ArrowBackIosNewRoundedIcon
        sx={{
          display: 'block',
          color: '#fff',
          width: '3rem',
          height: '3rem'
        }}
      />
    </Link>
  )
}
