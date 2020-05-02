import React from 'react';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import SEO from '../components/seo';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Staff from '../components/Staff';
import Slider from '../components/Slider';

import './index.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      // main: '#36454f',
      main: '#d7e6e3',
    },
    secondary: {
      main: '#ff4081',
    },
    alert: {
      main: '#edc147',
    },
  },
  type: 'light',
});

const IndexPage = () => (
  <MuiThemeProvider theme={theme}>
    <SEO title='Home' />
    <Header />
    <Banner />
    <Slider />
    <Staff />
  </MuiThemeProvider>
);

export default IndexPage;
