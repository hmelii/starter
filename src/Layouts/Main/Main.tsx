import { FC } from 'react'
import Box from '@mui/material/Box'

export const Main: FC = ({ children }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        zIndex: 1,
        overflow: 'hidden'
      }}
    >
      {children}
    </Box>
  )
}
