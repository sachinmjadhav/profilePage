import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { Switch, Route, Redirect } from "react-router-dom";
import blue from 'material-ui/colors/blue';
import './App.css';
import appRoutes from "../../routes/app.js";
import { NavBar } from '../../components';
import Footer from '../../components/Footer/Footer';

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    fontWeightMedium: 400,
    fontWeightRegular: 300,
    fontWeightLight: 100,
    button: {
      fontWeight: 300
    }
  }
});

const switchRoutes = (
  <Switch>
    {appRoutes.map((route) => {
      if (route.redirect)
        return <Redirect from={route.path} to={route.to} key={route.id} />;
      return <Route path={route.path} component={route.component} key={route.id} />;
    })}
  </Switch>
);


class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <NavBar title={"AAVVIS"} routes={appRoutes} />
        {switchRoutes}
        <Footer />
      </MuiThemeProvider>
    );
  }
}

export default App;