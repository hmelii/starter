import React from 'react';
import {createTheme, ThemeProvider} from "@mui/material";
import {Main} from "./Layouts";
import {Route} from "./components/Route";
import {Levels} from "./pages/Levels";
import {Level} from "./pages/Level";

import './styles.scss'

const theme = createTheme({
    typography: {
        fontFamily: 'Silka, sans-serif',
    },
});


function App() {
    return (
        <ThemeProvider theme={theme}>
            <Main>
                <Route path="/">


                    <Levels/>
                </Route>
                {/* <Route path="/levels/:id">
                        <Level/>
                    </Route>*/}
                <Route path="/levels/laundry">
                    <Level/>
                </Route>
                <Route path="/levels/household">
                    <Level/>
                </Route>
            </Main>
        </ThemeProvider>
    );
}

export default App;
