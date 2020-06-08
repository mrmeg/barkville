import React, {useState} from 'react';
import SwipeableViews from 'react-swipeable-views';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import beowolf from '../images/beowolf_testimonial.jpg';
import freya from '../images/freya_testimonial.jpg';
import gypsy from '../images/gypsy_testimonial.jpg';

const items = [
  {
    key: 1,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: beowolf,
    alt: 'a border collie',
  },
  {
    key: 2,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: freya,
    alt: 'a gray and white pitbull',
  }, {
    key: 3,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: gypsy,
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
      <Typography style={{textAlign: 'center', fontFamily: 'typeface-chivo'}} variant='h3'>Barkville Dogs</Typography>
      <SwipeableViews
        className={classes.slider}
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        enableMouseEvents
      >
        {items.map((item) => (
          <div key={item.key} className={classes.slide}>
            <Box className={classes.gridText} textAlign='center'>
              <Typography>{item.text}</Typography>
            </Box>
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
    width: '75%',
    height: 'auto',
    borderRadius: 10,
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
