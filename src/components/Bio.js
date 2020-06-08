import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';

const Bio = () => {
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
      <Img style={{width: '100%', maxWidth: 400, maxHeight: 417}} fluid={data.enrichment.childImageSharp.fluid} />

      <Typography style={{textAlign: 'center', fontFamily: 'typeface-chivo'}} variant='h3'>Enrichment Programs</Typography>

      <Typography variant='body1'>At Barkville, we strive to help dogs grow to be their best selves while empowering owners and supporting them through every milestone in their dog&apos;s life. Through our education based enrichment programs, we work to support good canine citizens and nurture connectivity between dogs and their owners so they can grow to accomplish extraordinary things. Over the years of dog handling, our motto and our beliefs stand in the realm of every dog has potential to be better no matter the size, age, breed or temperment, we are here for you! Some of our specialties include:</Typography>

    </Container>
  );
};

export default Bio;

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  leftElement: {
    backgroundColor: 'lightgray',
    width: '50%',
    height: 'auto',
  },
  rightElement: {
    backgroundColor: 'tan',
    width: '50%',
    height: 'auto',
  },
}));
