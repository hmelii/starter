import React, {FC, ReactElement, useEffect, useState} from "react";
import {Box} from '@mui/material'

type RoutePropTypes = {
    path: string;
    children: ReactElement,
    animationEnter: Object,
    animationLeave: Object
}


export const Route: FC<RoutePropTypes> = ({path, children, animationEnter, animationLeave}) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    const [isCurrentPath, setIsCurrentPath] = useState(false);

    const [isShown, setShown] = useState(false);



    useEffect(() => {

        const onLocationChange = () => {
            setCurrentPath(window.location.pathname);
        }

        window.addEventListener('popstate', onLocationChange);

        return () => {
            window.removeEventListener('popstate', onLocationChange);
        };


    }, [])

    const onAnimationEnd = () => {
        if (!isCurrentPath) {
            console.log('test')
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


    // const styles = !isCurrentPath ? {position: 'absolute', inset: 0, zIndex: -1} : {}


    return (
        <>
            {isShown ? <Box onAnimationEnd={onAnimationEnd} sx={isCurrentPath ? animationEnter : animationLeave}>{children}</Box> : null}
            {/*<Slide timeout={1000} direction={animationEnter}  in={true} mountOnEnter unmountOnExit><Box>{children}</Box></Slide>*/}
            {/*{ isShown && !isCurrentPath && <Box sx={ stylesShown} ref={shadowRef}>{children}</Box>}*/}
        </>
    )
    /* ?  <Box sx={{position: 'relative', zIndex: 2, background: '#fff', width: '100%'}}><Slide direction="right" in={true} mountOnEnter unmountOnExit><Box>{children}</Box></Slide></Box>
     : <Box sx={{position: 'absolute', zIndex: 1, background: '#fff', inset: 0}}> <Slide direction="left" in={true} mountOnEnter unmountOnExit><Box>{children}</Box></Slide></Box>;*/
}

