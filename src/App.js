import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import CircularProgress from "@material-ui/core/CircularProgress";
import ToolbarAbstraction from "./components/header/header";

import ErrorBoundary from './components/error-boundary/error-boundary';

import { GlobalStyle } from './global.styles';

const HomePage = lazy(() => import('./pages/homepage/homepage'));
const AboutPage = lazy(() => import('./pages/aboutpage/aboutpage'));
const ContactPage = lazy(() => import('./pages/contactpage/contactpage'));

function App() {
  return (
    <div className="App">
        <GlobalStyle />
        <ToolbarAbstraction />
        <Switch>
            <ErrorBoundary>
                <Suspense fallback={<CircularProgress color="secondary" />}>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/about' component={AboutPage} />
                    <Route exact path='/contact' component={ContactPage} />
                </Suspense>
            </ErrorBoundary>
        </Switch>
    </div>
  );
}

export default App;
