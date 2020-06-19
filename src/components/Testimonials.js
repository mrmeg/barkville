import React, {useState} from 'react';
import SwipeableViews from 'react-swipeable-views';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// Assets
import beowolf from '../images/beowolf_testimonial.jpg';
import freya from '../images/freya_testimonial.jpg';
import gypsy from '../images/gypsy_testimonial.jpg';

const items = [
  {
    key: 1,
    text: `
    Honestly, I definitely was not prepared for the challenges of having a German Shepherd in NYC.  She is smart, sassy, and spunky — all the things you want in a GSD, however, it is a breed that needs special understanding and training, that I quickly realized I did not have.  Here is where Maya and Barkville came into our lives — to our rescue! \n\nWe have been part of the Barkville family since my sweet pup was only a couple of months old.  I have literally watched her transform from being extremely hyper and stubborn on a leash to much more respectful, and even walking with other dogs which is something I never thought possible! All of this comes from working with Barkville. \n\n As much as the training is for my pup, it is equally as much for me.  I can honestly say, they have the unique gift of training not only the animals, but the humans as well.  We do not leave our big girl with anyone besides Maya's team, whether it is for walks while we are at work, or for overnight sleepovers.  We trust them to take the best care of her, and they honestly treat my girl like their own.  Maya has become like family to us, and I KNOW it would not have been possible to have the dog I have now without them. Over the last few years, I have learned so much and continue to grow in our journey.  They truly help  make my dog and I be the best TEAM we can be!
    `,
    image: beowolf,
    alt: 'A German Shepherd and her owner',
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

const Testimonials = () => {
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
              <Typography className={classes.text}>{item.text}</Typography>
              {item.text2 ? <Typography className={classes.text}>{item.text2}</Typography> : null}
              {item.text3 ? <Typography className={classes.text}>{item.text3}</Typography> : null}
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

export default Testimonials;

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
  text: {
    marginBottom: 5,
  },
}));
