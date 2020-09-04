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
import DogWalking from '../images/dog-walking.jpg';
import DogTraining from '../images/dog-training.jpg';
import Boarding from '../images/boarding.jpg';

const panelDetails = [
  {
    key: 1,
    image: DogTraining,
    title: 'Dog Training',
    text: [
      'While it’s called “dog training,” a dog’s training is only as good as its handler. This is why when we do our training, we focus more on educating the owner to fill the gap in understanding their dog’s motives and behaviors. Using a well-balanced and education-based training approach, we teach early puppy training and behavior modification for all dogs of all ages and breeds. These trainings are 1-1 sessions that range from 60-75 minutes and are followed with a training document that covers everything covered in our training.',
      <br />,
      <br />,
      '*We also do Family Training (Adults and kids)*',
    ],
    price: 'Solo walks: $25/30 minutes | $40/hour',
    alt: 'A small dog wearing training vest sitting',
  },
  {
    key: 2,
    image: DogWalking,
    title: 'UES Dog Walking - Socialization Walks',
    text: 'These are group walks designed for dogs to practice safe socialization greetings and approaches with trainers and balanced dogs present. These walks are best for dogs that need support with leash manners and for dogs that have already done a 1-1 training session, although it’s not vital. If your dog is five months or younger, this is not recommended unless it has already been discussed with a trainer.',
    price: '',
    alt: 'A group of dogs sitting politely on a sidewalk',
  },
  {
    key: 3,
    image: Boarding,
    title: 'Boarding & Overnights',
    text: 'Give your dog the ultimate getaway experience with a trainer who will prioritize your dog’s behavioral and physical needs and will even create small excursions for your dog! Your dog will have the choice to stay in our home or we can go to yours. We accept dogs that are in training and puppies of all ages. If you have a dog that has not stayed with us or trained with us before, please contact us to see what option of care is best for you!',
    price: '',
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
      <Typography style={{textAlign: 'center', fontFamily: 'typeface-chivo'}} variant='h3'>Enrichment Programs</Typography>

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

      <Typography variant='body1'>At Barkville, we strive to help dogs grow to be their best selves while empowering owners and supporting them through every milestone in their dog's life. Through our education-based enrichment programs, we work to support good canine citizens and nurture connectivity between dogs and their owners so they can grow together to accomplish extraordinary things. Over years of dog care, we believe every dog has potential to be better no matter the size, age, breed or temperament. Some of our specialties include:</Typography>

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
              {/* <Typography className={classes.priceText}>{item.price}</Typography> */}
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
