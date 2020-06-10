import React from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const Footer = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <div className={classes.bottomBar}>
      <div />
      <Typography className={classes.copyright} variant='subtitle2'>&#169; 2020 - Made by Matt Megenhardt </Typography>
    </div>
  );
};

export default Footer;

export const useStyles = makeStyles((theme) => ({
  bottomBar: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 100,
    marginTop: 10,
    backgroundColor: theme.palette.primary.main,
  },
  copyright: {
    fontFamily: 'typeface-overpass',
  },
}));
