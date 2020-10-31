import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import { ThemeProvider } from '@material-ui/styles';

import MuiTheme from './theme';

// Layout Blueprints

import { PresentationLayout } from './layout-blueprints';
import Activities from './webapp-pages/Activities';
import SignIn from './webapp-pages/SignIn';
import SignUp from './webapp-pages/SignUp';
import LandingPage from './webapp-pages/LandingPage';
import Dashboard from './webapp-pages/Dashboard';
import Community from './webapp-pages/Community';
import Writing from './webapp-pages/Writing';
import Coding from './webapp-pages/Coding';
import Ide from './webapp-pages/Ide';
import Paragraph from './webapp-pages/Paragraph';
const Routes = () => {
  const location = useLocation();

  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.99
    },
    in: {
      opacity: 1,
      scale: 1
    },
    out: {
      opacity: 0,
      scale: 1.01
    }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.4
  };

  return (
    <ThemeProvider theme={MuiTheme}>
      <AnimatePresence>
        <Suspense
          fallback={
            <div className="d-flex align-items-center vh-100 justify-content-center text-center font-weight-bold font-size-lg py-3">
              <div className="w-50 mx-auto">Loading...</div>
            </div>
          }>
          <Switch>
            <Redirect exact from="/" to="/LandingPage" />
            <Route
              path={[
                '/LandingPage',
                '/Activities',
                '/SignIn',
                '/SignUp',
                '/Dashboard',
                '/Community',
                '/Writing',
                '/Coding',
                '/Ide',
                '/Paragraph'
              ]}>
              <PresentationLayout>
                <Switch location={location} key={location.pathname}>
                  <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}>
                    <Route path="/LandingPage" component={LandingPage} />
                    <Route path="/Dashboard" component={Dashboard} />
                    <Route path="/Activities" component={Activities} />
                    <Route path="/SignIn" component={SignIn} />
                    <Route path="/SignUp" component={SignUp} />
                    <Route path="/Community" component={Community} />
                    <Route path="/Writing" component={Writing} />
                    <Route path="/Coding" component={Coding} />
                    <Route path="/Ide" component={Ide} />
                    <Route path="/Paragraph" component={Paragraph} />
                  </motion.div>
                </Switch>
              </PresentationLayout>
            </Route>
          </Switch>
        </Suspense>
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default Routes;
