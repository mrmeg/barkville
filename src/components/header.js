import React, {useState} from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import {Instagram, Phone} from '@material-ui/icons';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo_pet_services.png" }) {
        childImageSharp {
          fixed(height: 150, width: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const toggleDrawer = (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(!drawerOpen);
  };

  const drawerContent = () => (
    <ClickAwayListener onClickAway={() => setDrawerOpen(false)}>
      <div className={classes.drawer} role='presentation'>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Img fixed={data.logo.childImageSharp.fixed} />
        </div>
        <Typography style={{fontFamily: 'typeface-overpass', textAlign: 'center', marginLeft: 5, marginRight: 5, lineHeight: 1}} variant='subtitle1'>Dog walking, training, and overnight care for New York&apos;s Upper East Side.</Typography>
        <Divider style={{marginTop: 10, marginBottom: 5}} variant='middle' />
        <Typography className={classes.drawerHeader} variant='h6'>Contact Us</Typography>
        <List>
          <ListItem button key={0}>
            <ListItemIcon><Phone /></ListItemIcon>
            <ListItemText primary='917-722-0116' />
          </ListItem>
          <ListItem button key={1} onClick={() => window.open('https://www.instagram.com/barkville_nyc/', '_blank')}>
            <ListItemIcon><Instagram /></ListItemIcon>
            <ListItemText primary='Instagram' />
          </ListItem>
        </List>
      </div>
    </ClickAwayListener>
  );

  return (
    <AppBar className={classes.topNav} position='sticky'>
      <div className={classes.leftElement}>
        <IconButton
          edge='start'
          className={classes.menuButton}
          aria-label='menu'
          onClick={(event) => toggleDrawer(event)}
        >
          <MenuIcon />
        </IconButton>
        <Drawer anchor='left' open={drawerOpen}>
          {drawerOpen ? drawerContent() : null}
        </Drawer>
        <Typography className={classes.barkville} variant='h5'>Barkville NYC</Typography>
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
  drawerHeader: {
    fontFamily: 'typeface-chivo',
    textAlign: 'center',
    lineHeight: 1,
  },
  leftElement: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  drawer: {
    width: 300,
    maxWidth: '80%',
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
