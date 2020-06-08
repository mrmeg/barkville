import React, {useState} from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import {Instagram, Phone} from '@material-ui/icons';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';

const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [showPhone, setShowPhone] = useState(false);
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo_pet_services.png" }) {
        childImageSharp {
          fixed(height: 50, width: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <AppBar className={classes.topNav} position='sticky'>
      <div className={classes.leftElement}>
        <Img fixed={data.logo.childImageSharp.fixed} />
        <Typography className={classes.barkville} variant='h6'>Barkville NYC</Typography>
      </div>
      <div className={classes.rightElement}>
        <Instagram style={{marginRight: 2}} onClick={() => window.open('https://www.instagram.com/barkville_nyc/', '_blank')} />
        {showPhone
          ? <Typography style={{marginLeft: 2}} onClick={() => setShowPhone(false)} className={classes.phone} variant='body1'>917-722-0116</Typography>
          : <Phone style={{marginLeft: 2}} onClick={() => setShowPhone(true)} />
        }
      </div>
    </AppBar>
  );
};

export default Header;

const useStyles = makeStyles(() => ({
  barkville: {
    fontFamily: 'typeface-chivo',
    textAlign: 'left',
    lineHeight: 1,
  },
  leftElement: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 'auto',
    maxWidth: '100%',
  },
  topNav: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  rightElement: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  phone: {
    marginRight: 10,
    fontFamily: 'typeface-chivo',
  },
}));
