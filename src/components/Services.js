/* eslint-disable max-len */
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import DogWalking from '../images/dog_walking.jpg';
import DogTraining from '../images/dog_training.jpg';
import Staycation from '../images/staycation.jpg';

const panelDetails = [
  {
    key: 1,
    image: DogWalking,
    title: 'UES Dog Walking',
    description: 'Think of a dog’s walk with Barkville like an hour of camp! We offer an hour of a structured group walk to the park, followed by a water break, mixed with some supervised and structured engagement so dogs can bond with respectful boundaries.',
    price: 'Solo walks: $25/30 minutes | $40/hour',
  },
  {
    key: 2,
    image: DogTraining,
    title: 'Dog Training',
    description: 'We specialize in behavior modification for all dogs and owners in need using a well balanced and education based training approach. All the tools we use come with a strict education based training approach.',
    description2: 'First session begins with a consultation, behavior assessment, followed by a training regiment. Our dog walking, off leash services, and agility program, are all follow up programs that solidify our training regiment and philosophy.',
    description3: '',
    price: '',
  },
  {
    key: 3,
    image: Staycation,
    title: 'Staycations',
    description: 'This service is best for when you are going away and for dogs that thrive best in an environment they’re already familiar with! This overnight is done with only trainers who provide around the clock care.',
    description2: 'Overnight care also comes with excursions to different places in the city and time with other well balanced dogs. For an additional charge, we also offer a  weight loss/ training program for dogs that need more structure or who may need to lose some weight.',
    price: '',
  },
];

const Services = () => {
  const classes = useStyles();
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

      <Typography variant='body1'>At Barkville, we strive to help dogs grow to be their best selves while empowering owners and supporting them through every milestone in their dog&apos;s life. Through our education based enrichment programs, we work to support good canine citizens and nurture connectivity between dogs and their owners so they can grow to accomplish extraordinary things. Over the years of dog handling, our motto and our beliefs stand in the realm of every dog has potential to be better no matter the size, age, breed or temperment, we are here for you! Some of our specialties include:</Typography>

      <div className={classes.listText}>
        <Typography className={classes.listItem} variant='body1'>{'\u25cf'} Leash/Dog Reactivity</Typography>
        <Typography className={classes.listItem} variant='body1'>{'\u25cf'} Socialization</Typography>
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
            <Typography className={classes.heading} variant='body1'>{item.title}</Typography>
          </ExpansionPanelSummary>
          <div className={classes.panelDetails}>
            <img className={classes.panelImage} src={item.image} alt='A cute Beagle puppy' />
            <Typography variant='body2'>{item.description}</Typography>
            {item.description2 !== '' ? <Typography style={{paddingTop: '.75rem'}} variant='body2'>{item.description2}</Typography> : null}
            {item.description3 !== '' ? <Typography style={{paddingTop: '.75rem'}} variant='body2'>{item.description3}</Typography> : null}
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
  panelImage: {
    float: 'left',
    height: 'auto',
    maxHeight: 'auto',
    maxWidth: '100%',
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
