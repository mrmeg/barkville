import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';

const Banner = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth='lg'>
      <Image />
    </Container>
  );
};

export default Banner;

const useStyles = makeStyles(() => ({
  container: {
    margin: '0 auto',
    padding: 0,
  },
  image: {
  },
}));

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      bannerImage: file(relativePath: { eq: "banner.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1280, maxHeight: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Img imgStyle={{borderRadius: 5}} fluid={data.bannerImage.childImageSharp.fluid} />
  );
};
