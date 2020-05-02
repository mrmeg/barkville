import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import test1 from '../images/test1.jpeg';
import test2 from '../images/test2.jpeg';
import test3 from '../images/test3.jpeg';

const gridItems = [
  {
    name: 'Maya Haber',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: test1,
    alt: 'a border collie',
  },
  {
    name: 'Kailyn Something',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: test2,
    alt: 'a gray and white pitbull',
  },
  {
    name: 'Rich Idunno',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: test3,
    alt: 'a labrador retriever',
  },
];

const Staff = () => {
  const classes = useStyles();

  return (
    <Container maxWidth='md'>
      <h1 style={{textAlign: 'center'}}>Our Pack</h1>
      <Grid container direction='row' justify='center' alignItems='center' spacing={4}>
        {gridItems.map((item) => (
          <Grid className={classes.gridItem} item xs={12} sm={6} md={4}>
            <Box className={classes.gridText} textAlign='center'>{item.text}</Box>
            <img className={classes.image} src={item.image} alt={item.alt} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Staff;

const useStyles = makeStyles(() => ({
  gridItem: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridText: {
    marginTop: 5,
    marginBottom: 5,
  },
  image: {
    width: '100%',
    height: 'auto',
    maxWidth: 400,
  },
}));
