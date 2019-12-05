import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ThemeProvider, ColorModeProvider } from '@chakra-ui/core'
import NavBar from './components/NavBar'
import AcercaDe from './layouts/AcercaDe'
import Main from './layouts/Main'
import Diagnostico from './layouts/Diagnostico'
import Error404 from './layouts/Error404'
import Theme from './theme'

function App() {
    return (
        <ThemeProvider theme={ Theme }>
            <ColorModeProvider>
                <BrowserRouter>
                    <NavBar />
                    <Switch>
                        <Route path="/" component={ Main } exact />
                        <Route path="/general" component={ Diagnostico } exact />
                        <Route path="/especifico" component={ Diagnostico } exact />
                        <Route path="/acerca-de" component={ AcercaDe } exact />
                        <Route component={ Error404 } />
                    </Switch>
                </BrowserRouter>
            </ColorModeProvider>
        </ThemeProvider>
    );
}

export default App;
