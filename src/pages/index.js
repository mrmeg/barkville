import React from 'react';
import {MuiThemeProvider, createMuiTheme, makeStyles} from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import SEO from '../components/seo';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Services from '../components/Services';
import Consultation from '../components/Consultation';
import Philosophy from '../components/Philosophy';
import Footer from '../components/Footer';
import Reviews from '../components/Reviews';
import './index.css';

require('typeface-chivo');
require('typeface-overpass');

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'typeface-overpass',
      'Helvetica Neue',
      'Arial',
      'sans-serif',
    ].join(','),
  },
  palette: {
    primary: {
      main: '#c8e1cc',
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

const IndexPage = () => {
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={theme}>
      <SEO title='Barkville' />
      <Header />
      <Banner />
      <Philosophy />
      <Divider className={classes.divider} variant='middle' />
      <Services />
      <Divider className={classes.divider} variant='middle' />
      <Reviews />
      <Divider className={classes.divider} variant='middle' />
      <Consultation />
      <Footer />
    </MuiThemeProvider>
  );
};

export default IndexPage;

const useStyles = makeStyles(() => ({
  divider: {
    marginTop: 25,
    marginBottom: 15,
    marginLeft: '10%',
    marginRight: '10%',
  },
}));
