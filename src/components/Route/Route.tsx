import React, {FC, ReactElement, useEffect, useRef, useState} from "react";
import {Box, Slide, Fade} from '@mui/material'
import { jsx, css, keyframes } from '@emotion/react'
import {SlideProps} from "@mui/material/Slide/Slide";

type RoutePropTypes = {
    path: string;
    children: ReactElement,
    animationEnter: Object,
    animationLeave: Object
}








export const Route: FC<RoutePropTypes> = ({path, children, animationEnter, animationLeave}) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    const [isCurrentPath, setIsCurrentPath] = useState(false)
    // const routeRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
    // const [appear, setApear] = useState(false)
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
            if (!isCurrentPath) {
                setShown(false)
            }
        }


        window.addEventListener('popstate', onLocationChange);

        if (shadowRef && shadowRef.current) {
            // @ts-ignore
            shadowRef.current.addEventListener('animationend', onAnimationEnd);
        }




        return () => {
            window.removeEventListener('popstate', onLocationChange)

            if (shadowRef && shadowRef.current) {
                // @ts-ignore
                shadowRef.current.removeEventListener('animationend', onAnimationEnd);
            }
        };


    }, [])

    useEffect(() => {
        setIsCurrentPath(currentPath === path)
    }, [currentPath, path])

    useEffect(() => {
        if (isCurrentPath) {
            console.log(currentPath)
            setShown(true)
            // setApear(isCurrentPath)

        }
    }, [isCurrentPath])


    // const styles = !isCurrentPath ? {position: 'absolute', inset: 0, zIndex: -1} : {}


    return (
        <>
            {isShown ? <Box ref={shadowRef} sx={isCurrentPath ? animationEnter : animationLeave}>{children}</Box> : null}
              {/*<Slide timeout={1000} direction={animationEnter}  in={true} mountOnEnter unmountOnExit><Box>{children}</Box></Slide>*/}
            {/*{ isShown && !isCurrentPath && <Box sx={ stylesShown} ref={shadowRef}>{children}</Box>}*/}
        </>
    )
    /* ?  <Box sx={{position: 'relative', zIndex: 2, background: '#fff', width: '100%'}}><Slide direction="right" in={true} mountOnEnter unmountOnExit><Box>{children}</Box></Slide></Box>
     : <Box sx={{position: 'absolute', zIndex: 1, background: '#fff', inset: 0}}> <Slide direction="left" in={true} mountOnEnter unmountOnExit><Box>{children}</Box></Slide></Box>;*/
}

