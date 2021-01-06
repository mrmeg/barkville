/* eslint-disable max-len */
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import json2mq from 'json2mq';
import Container from '@material-ui/core/Container';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';

import OnlineTraining from '../images/onlineTraining.jpg';
import DogWalking from '../images/dog-walking.jpg';
import Boarding from '../images/boarding.jpg';

const panelDetails = [
  {
    key: 1,
    image: OnlineTraining,
    title: 'Online Training',
    text: [
      'Great for accessing information anywhere you go! This is best for anyone who’s looking for ways they can improve their relationship with their dog while also receiving the best information possible of how to be set up for success. ',
      <br />,
      <br />,
    ],
    price: ['Price: $2/minute'],
    alt: 'A small dog wearing training vest sitting',
  },
  {
    key: 2,
    image: DogWalking,
    title: 'Puppy Obedience Training',
    text: [
      'This is a strict 10 session course teaching you how to hold your puppy accountable to a higher standard in NYC. While we want puppies to have fun and a great puppyhood, part of that is also teaching novice puppy owners the importance of learning how to keep them safe in situations which, you as an owner, or new pet parent, might not even realize could be dangerous. We see the best results when owners learn and understand the true dog mentality. That is why it’s so important that we teach you healthy strategies to navigate, making friends, apartment manners & etiquette, NYC street walking, followed by emergency safety protocols.',
      <br />,
      'We also do Family Training (Adults and kids)',
      <br />,
      'Can be purchased as individual sessions or as a bulk package',

    ],
    price: [
      'Individual: $150/90 minutes or $100/70 minutes',
      <br />,
      'Package: $1400 - Ten 90-minute sessions',
      <br />,
      'Package: $900 - Ten 70-minute sessions',
      <br />,
    ],
    alt: 'A group of dogs sitting politely on a sidewalk',
  },
  {
    key: 3,
    image: Boarding,
    title: 'Behavior Modification',
    text: [
      'Can be purchased as individual sessions or as a bulk package',
      <br />,
      '*Customized Training Plan with Goals',
      <br />,
      '*24/7 care and training',
      <br />,
      '*Excursions to different parts of the city and upstate excursions',
      <br />,
      '*2 in-person sessions a week (included in B&T program)*',
      <br />,
      'Bonded & Insured (TBD)',
    ],
    price: [
      'Individual: $200/90 minutes',
      <br />,
      'Package: $1900 - Ten 90-minute sessions',
      <br />,
      'Board N’ Train: $150/day for 4 or 6 weeks',
    ],
    alt: 'Trainer walking a Beagle and Great Dane',
  },
];

const Services = () => {
  const classes = useStyles();
  const matches = useMediaQuery(
    json2mq({
      maxWidth: 500,
    }),
  );
  const data = useStaticQuery(graphql`
    query {
      enrichment: file(relativePath: { eq: "enrichment.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 417) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Container className={classes.container} maxWidth='md'>
      <Typography style={{textAlign: 'center', fontFamily: 'typeface-chivo'}} variant='h3'>Training Services</Typography>

      <Img
        style={{
          width: '100%',
          maxWidth: 400,
          maxHeight: 417,
          alignSelf: 'center',
          margin: '15px 0'}}
        imgStyle={{borderRadius: 5}}
        fluid={data.enrichment.childImageSharp.fluid}
      />

      <Typography style={{textAlign: 'center', fontFamily: 'typeface-chivo', fontWeight: 600, marginTop: 25, marginBottom: 15}} variant='h5'>Setting you up for success</Typography>

      <Typography variant='body1'>At Barkville, we have seen a range of what behavior modification can look like in NYC and we know what’s on the line when it comes to safety and liability. Our greatest success stories are often attached to owners who really understand the “why” and “how”  in relation to their dog’s behavior and overall situation.</Typography>

      <Typography variant='body1'>We strive to help dogs grow to be their best selves while empowering owners and supporting them through every milestone in their dog's life. Through our education-based enrichment programs, we work to support good canine citizens and nurture connectivity between dogs and their owners so they can grow together to accomplish extraordinary things. Over years of dog care, we believe every dog has potential to be better no matter the size, age, breed or temperament. Some of our specialties include:</Typography>

      <div className={classes.listText}>
        <Typography className={classes.listItem} variant='body1'>{'\u25cf'} Leash/Dog Reactivity</Typography>
        <Typography className={classes.listItem} variant='body1'>{'\u25cf'} Socialization</Typography>
        <Typography className={classes.listItem} variant='body1'>{'\u25cf'} Separation Anxiety</Typography>
        <Typography className={classes.listItem} variant='body1'>{'\u25cf'} Puppy Obedience Training</Typography>
        <Typography className={classes.listItem} variant='body1'>{'\u25cf'} Off-Leash Training</Typography>
        <Typography className={classes.listItem} variant='body1'>{'\u25cf'} XXL Dog Care/Training</Typography>
      </div>

      {panelDetails.map((item) => (
        <ExpansionPanel key={item.key}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <Typography style={{fontWeight: 'bold'}} variant='body1'>{item.title}</Typography>
          </ExpansionPanelSummary>
          <div className={matches ? classes.panelDetailsColumn : classes.panelDetails}>
            <img className={classes.panelImage} src={item.image} alt={item.alt} />
            <Typography variant='body2'>{item.text}</Typography>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <Typography className={classes.priceText}>{item.price}</Typography>
            </div>
          </div>
        </ExpansionPanel>
      ))}
    </Container>
  );
};

export default Services;

const useStyles = makeStyles(() => ({
  centered: {
    alignSelf: 'center',
  },
  container: {
    paddingBottom: 20,
    display: 'flex',
    flexDirection: 'column',
  },
  listItem: {
    marginTop: 3,
    marginBottom: 3,
  },
  listText: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '1.5rem',
    textAlign: 'center',
  },
  panelDetails: {
    padding: '8px 16px 16px 8px',
  },
  panelDetailsColumn: {
    display: 'flex',
    flexDirection: 'column',
    padding: '8px 16px 16px 8px',

  },
  panelImage: {
    float: 'left',
    height: 'auto',
    maxHeight: 'auto',
    maxWidth: 300,
    marginRight: '1rem',
    borderRadius: 5,
    overflow: 'contain',
  },
  priceText: {
    fontWeight: 'bold',
    marginTop: '.75rem',
    whiteSpace: 'pre-line',
  },
}));
