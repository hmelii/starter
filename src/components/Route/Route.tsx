import React, {FC, ReactElement, useEffect, useState} from "react";
import {Box, Slide} from '@mui/material'

type RoutePropTypes = {
    path: string;
    children: ReactElement
}

export const Route: FC<RoutePropTypes> = ({path, children}) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    // const routeRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;

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

        }

        window.addEventListener('popstate', onLocationChange);

        // routeRef.current.addEventListener('animationend', onAnimationEnd);


        return () => {
            window.removeEventListener('popstate', onLocationChange)
        };

    }, [])

    return currentPath === path
        ?  <Slide direction="right" in={true} mountOnEnter unmountOnExit ><Box>{children}</Box></Slide>
        : null;
}

