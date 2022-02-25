import React, { FC, ReactElement, useEffect, useState } from 'react'
import { Box } from '@mui/material'

type RoutePropTypes = {
  path: string
  children: ReactElement
  animationEnter: Object
  animationLeave: Object
}

export const Route: FC<RoutePropTypes> = ({
  path,
  children,
  animationEnter,
  animationLeave
}) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  const [isCurrentPath, setIsCurrentPath] = useState(false)
  const [firstPage, setFirstPage] = useState(false)

  const [isShown, setShown] = useState(false)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
      setFirstPage(false)
    }
    setFirstPage(window.location.pathname === path)
    window.addEventListener('popstate', onLocationChange)

    return () => {
      window.removeEventListener('popstate', onLocationChange)
    }
  }, [])

  const onAnimationEnd = () => {
    if (!isCurrentPath) {
      setShown(false)
    }
  }

  useEffect(() => {
    setIsCurrentPath(currentPath === path)
  }, [currentPath, path])

  useEffect(() => {
    if (isCurrentPath) {
      setShown(true)
    }
  }, [isCurrentPath])

  return (
    <>
      {isShown ? (
        <Box
          onAnimationEnd={onAnimationEnd}
          sx={firstPage ? {} : isCurrentPath ? animationEnter : animationLeave}
        >
          {children}
        </Box>
      ) : null}
    </>
  )
}
