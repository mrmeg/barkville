import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Image from './image';

const Banner = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth='lg'>
      <Image className={classes.image} />
    </Container>
  );
};

export default Banner;

const useStyles = makeStyles(() => ({
  container: {
    margin: '0 auto',
    padding: 0,
  },
}));
