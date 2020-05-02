import React from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import {Instagram} from '@material-ui/icons';
import logo from '../assets/logo_pet_services.png';

const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  console.log(theme);

  return (
    <AppBar className={classes.topNav} position='static'>
      <div style={{justifyContent: 'center', alignItems: 'center'}}>
        <img src={logo} alt='' className={classes.logo} />
      </div>
      <div className={classes.navRight}>
        <Typography style={{marginRight: 10}} variant='body1'>
          XXX-XXX-XXXX
        </Typography>
        <Instagram />
      </div>
    </AppBar>
  );
};

export default Header;

const useStyles = makeStyles(() => ({
  logo: {
    width: 75,
    height: 'auto',
    maxWidth: '100%',
  },
  topNav: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  navRight: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
}));
