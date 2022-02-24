import React, {FC, ReactElement, useEffect, useRef, useState} from "react";
import {Box, Slide, Fade} from '@mui/material'
import { jsx, css, keyframes } from '@emotion/react'

type RoutePropTypes = {
    path: string;
    children: ReactElement
}


const keyframe = keyframes`
  0% {
        opacity: 1;
        background-color: rgba(255,255,255,1);
        transform: translate(0%, 0);
    }
    100% {
        transform: translate(30%, 0);
        background-color: rgba(0,0,0,.5);
        opacity: .5
    }
`

const stylesShown = {position: 'absolute', inset: 0,  animation: `${keyframe} 1s ease`, opacity: 1, zIndex: -1}

const stylesHidden = {}



export const Route: FC<RoutePropTypes> = ({path, children}) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    const [isCurrentPath, setIsCurrentPath] = useState(false)
    // const routeRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
    const [appear, setApear] = useState(false)
    // const isCurrentPath = currentPath === path
    const [isShown, setShown] = useState(false)
    const shadowRef = useRef()

    useEffect(() => {


        const onLocationChange = () => {

            // @ts-ignore
            // routeRef.current.style='transform: translateX(-100%); transition: transform .3s ease'
            // setTimeout(() => {
            // setCurrentPath(window.location.pathname);
            // }, 300)

            setCurrentPath(window.location.pathname)

        }

        const onAnimationEnd = () => {
            console.log('test')
            setShown(false)
        }


        window.addEventListener('popstate', onLocationChange);

        if (shadowRef && shadowRef.current) {
            // @ts-ignore
            shadowRef.current.addEventListener('animationend', onAnimationEnd);
        }




        return () => {
            window.removeEventListener('popstate', onLocationChange)
        };


    }, [])

    useEffect(() => {
        setIsCurrentPath(currentPath === path)
    }, [currentPath, path])

    useEffect(() => {
        if (isCurrentPath) {
            setShown(true)
            setApear(isCurrentPath)

        }
    }, [isCurrentPath])

    const onEndListener = () => {
        console.log('test')
    }


    // const styles = !isCurrentPath ? {position: 'absolute', inset: 0, zIndex: -1} : {}


    return (
        <>
            {isCurrentPath &&
              <Slide timeout={1000} direction={isCurrentPath ? 'right' : 'left'}  in={true} mountOnEnter unmountOnExit><Box>{children}</Box></Slide>}
            { isShown && !isCurrentPath && <Box sx={ stylesShown} ref={shadowRef}>{children}</Box>}
        </>
    )
    /* ?  <Box sx={{position: 'relative', zIndex: 2, background: '#fff', width: '100%'}}><Slide direction="right" in={true} mountOnEnter unmountOnExit><Box>{children}</Box></Slide></Box>
     : <Box sx={{position: 'absolute', zIndex: 1, background: '#fff', inset: 0}}> <Slide direction="left" in={true} mountOnEnter unmountOnExit><Box>{children}</Box></Slide></Box>;*/
}

