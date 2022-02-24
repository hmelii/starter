import React, { FC, ReactNode } from 'react'
import { default as MuiLink } from '@mui/material/Link'

type LinkPropTypes = {
  styles?: Object | string
  href: string
  children: ReactNode
}

export const Link: FC<LinkPropTypes> = ({ styles = {}, href, children }) => {
  const onClick = (event: {
    metaKey: any
    ctrlKey: any
    preventDefault: () => void
  }) => {
    if (event.metaKey || event.ctrlKey) {
      return
    }

    event.preventDefault()
    window.history.pushState({}, '', href)

    const navEvent = new PopStateEvent('popstate')
    window.dispatchEvent(navEvent)
  }

  return (
    <MuiLink sx={styles} href={href} onClick={onClick}>
      {children}
    </MuiLink>
  )
}
