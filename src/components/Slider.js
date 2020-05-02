import React, {useState} from 'react';
import SwipeableViews from 'react-swipeable-views';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import IconButton from '@material-ui/core/IconButton';
import test3 from '../images/test3.jpeg';
import test2 from '../images/test2.jpeg';
import test1 from '../images/test1.jpeg';

const items = [
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: test1,
    alt: 'a border collie',
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: test2,
    alt: 'a gray and white pitbull',
  }, {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: test3,
    alt: 'a labrador retriever',
  },
];

const Slider = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = items.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Container maxWidth='md'>
      <h1 style={{textAlign: 'center'}}>Testimonials</h1>
      <SwipeableViews
        className={classes.slider}
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        enableMouseEvents
      >
        {items.map((item, index) => (
          <div className={classes.slide}>
            <Box className={classes.gridText} textAlign='center'>{item.text}</Box>
            <div className={classes.buttonsContainer}>
              <div className={classes.buttons}>
                <IconButton
                  size='medium'
                  edge='start'
                  onClick={() => handleBack()}
                  disabled={activeStep === 0}
                  className={classes.button}
                >
                  {theme.direction === 'rtl' ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                </IconButton>
                <IconButton
                  style={{}}
                  size='medium'
                  edge='end'
                  onClick={() => handleNext()}
                  disabled={activeStep === maxSteps - 1}
                  className={classes.button}
                >
                  {theme.direction === 'lrt' ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </IconButton>
              </div>
            </div>
            <img className={classes.image} src={item.image} alt={item.alt} />
          </div>
        ))}
      </SwipeableViews>
    </Container>
  );
};

export default Slider;

const useStyles = makeStyles(() => ({
  buttonsContainer: {
    height: '100%',
    width: '90%',
  },
  buttons: {
    display: 'flex',
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  gridText: {
    marginTop: 5,
    marginBottom: 5,
  },
  image: {
    width: 'auto',
    maxWidth: '95%',
    maxHeight: 400,
  },
  slide: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide1: {
    background: '#FEA900',
  },
  slide2: {
    background: '#B3DC4A',
  },
  slide3: {
    background: '#6AC0FF',
  },
}));
