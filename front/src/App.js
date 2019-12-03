import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ThemeProvider, ColorModeProvider } from '@chakra-ui/core'
import NavBar from './components/NavBar'
import Main from './layouts/Main'
import Diagnostico from './layouts/Diagnostico'
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
                    </Switch>
                </BrowserRouter>
            </ColorModeProvider>
        </ThemeProvider>
    );
}

export default App;
