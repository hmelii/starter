import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material'
import { Main } from './Layouts'
import { Route } from './components/Route'
import { Levels } from './pages/Levels'
import { Level } from './pages/Level'
import { keyframes } from '@emotion/react'
import './styles.css'

const theme = createTheme({
  typography: {
    fontFamily: 'Arial,  sans-serif'
  }
})

const fade = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

const levelsKeyframesEnter = keyframes`
    0% {
        transform: translate(100%, 0);
    }
    100% {
        transform: translate(0%, 0);
    }
`

const levelsKeyframesLeave = keyframes`
    0% {
        background-color: rgba(255,255,255,1);
        transform: translate(0%, 0);
    }
    100% {
        transform: translate(30%, 0);
        background-color: rgba(0,0,0,.5);
    }
`

const levelsAnimationEnter = { animation: `${levelsKeyframesEnter} .5s ease` }

const levelsAnimationLeave = {
  animation: `${levelsKeyframesLeave} .5s ease; position: absolute; inset: 0; z-index: -1`,
  '&:after': {
    content: '""',
    animation: `${fade} .5s ease`,
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(0,0,0,.5)'
  }
}

const levelKeyframesEnter = keyframes`
    0% {
        transform: translate(-100%, 0);
    }
    100% {
        transform: translate(0%, 0);
    }
`

const levelKeyframesLeave = keyframes`
    0% {
        background-color: rgba(255,255,255,1);
        transform: translate(0%, 0);
    }
    100% {
        transform: translate(-30%, 0);
        background-color: rgba(0,0,0,.5);
    }
`

const levelAnimationEnter = { animation: `${levelKeyframesEnter} .5s ease` }

const levelAnimationLeave = {
  animation: `${levelKeyframesLeave} .5s ease; position: absolute; inset: 0; z-index: -1`,
  '&:after': {
    content: '""',
    position: 'absolute',
    animation: `${fade} 1s ease`,
    inset: 0,
    backgroundColor: 'rgba(0,0,0,.5)'
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main>
        <Route
          path="/"
          animationEnter={levelsAnimationEnter}
          animationLeave={levelsAnimationLeave}
        >
          <Levels />
        </Route>
        <Route
          path="/levels/laundry"
          animationEnter={levelAnimationEnter}
          animationLeave={levelAnimationLeave}
        >
          <Level />
        </Route>
        <Route
          path="/levels/household"
          animationEnter={levelAnimationEnter}
          animationLeave={levelAnimationLeave}
        >
          <Level />
        </Route>
      </Main>
    </ThemeProvider>
  )
}

export default App
