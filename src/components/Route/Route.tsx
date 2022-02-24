import React, {FC, ReactElement, useEffect, useState} from "react";

type RoutePropTypes = {
    path: string;
    children: ReactElement
}

export const Route: FC<RoutePropTypes> = ({path, children}) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    const routeRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
    const pathRegex = /(\/\w+)\/:(\w+)/
    const locationPathRegex = /(\/\w+)\/(\w+)/

    const parseParams = () => {
        const locationPath = window.location.pathname
        const pathParse = path.match(pathRegex)
        const locationPathParse = locationPath.match(locationPathRegex)

        console.log('path', path)
        console.log('locationPath', locationPath)
        console.log('pathParse', pathParse)
        console.log('locationPathParse', locationPathParse)

        if (!locationPathParse || !pathParse) {
            return false
        }

        return {
            param: locationPathParse[2],
            paramName: pathParse[2]
        }

    }



    useEffect(() => {


        const onLocationChange = () => {
            const withParam = parseParams()


            // @ts-ignore
            // routeRef.current.style='transform: translateX(-100%); transition: transform .3s ease'
            // setTimeout(() => {
            // setCurrentPath(window.location.pathname);
            // }, 300)

            setCurrentPath(window.location.pathname)
        }
        window.addEventListener('popstate', onLocationChange);


        return () => {
            window.removeEventListener('popstate', onLocationChange)
        };

    }, [])

    return currentPath === path
        ? <>
            <div ref={routeRef}>{children}</div>

        </>
        : null;
}

