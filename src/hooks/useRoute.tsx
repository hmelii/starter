import { useState } from 'react'

export const useRoute = () => {
  const locationPathRegex = /(\/\w+)\/(\w+)/
  const [param, setParam] = useState(null)

  const parseParam = () => {
    const locationPath = window.location.pathname
    const locationPathParse = locationPath.match(locationPathRegex)

    if (locationPathParse) {
      // @ts-ignore
      setParam(locationPathParse[2])
    }
  }
  return {
    parseParam,
    param
  }
}
