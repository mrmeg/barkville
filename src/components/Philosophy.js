/* eslint-disable max-len */
import React from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const panelDetails = [
  {
    key: 1,
    heading: 'Detachment',
    text: 'Detachment is dropping the narrative that you consciously or unconsciously carry in association with your dog. My biggest story I created for my own dog, Lukey, was that because he was attacked his reactivity and aggression towards other dogs was justifiable and unfixable. The key words I used were “couldn’t” or “can’t”. Lukey “couldn’t be rehabilitated” or he “can’t control his emotional response” which then caused me to avoid or distract Lukey which was not the answer or way to deal with Lukey’s dog aggression or reactivity. That is why it’s vital that we remember that those narratives don’t serve our dogs. Feeling sorry for Lukey is not what helped him, but offering structured leadership did.',
  },
  {
    key: 2,
    heading: 'Leadership',
    text: 'Dogs, by nature, are pack animals and are happiest knowing they have a leader, a provider, and protector. When we don’t offer that to our dogs, they will gladly assume the role for us becoming the leader, provider (although they never pay rent), and protector. They will gladly lead you on your walk, tell you which dogs or humans are good and bad, and will even chase away scooters when posed as a threat etc. This is why, when we teach leadership, we teach it in all areas of your dog’s life. We focus on the walk, feeding time, social situations with dogs, humans, scooters and even affection towards your dog so that you can begin to nurture and guide the right and positive behaviors in your dogs!',
  },
  {
    key: 3,
    heading: 'Exercise',
    text: 'Every dog needs a physical outlet. It’s not a debate, physical activity is part of every dog’s genetic code just like a person must drink enough water to stay healthy and hydrated . Regardless of breed, size or age, every dog needs exercise on some level; by not fulfilling that need we are not creating that bridge path that leads to leadership or partnership between us and our dogs. Lack of exercise is the biggest root that leads to separation anxiety, leash aggression, low confidence etc.',
  },
  {
    key: 4,
    heading: 'Mental Engagement',
    text: 'The best way to think of enrichment and dog wellness is to think about a child’s school day. Everyday, your kid goes to school to learn how to stay in a single file line, how to write their ABC’s, how to play, share toys, follow societal rules like raising your hand in class and socialize with people different from us. Well believe it or not, our dogs need structure like that too. Sometimes our dogs need coaching in those exact issues too, right? Like learning how to walk without lunging, learning to socialize with respect, offering mental challenges that lead to positive outcomes, learning to follow our rules and how to disagree with our dog’s rules. Mental enrichment, rules, guidance, and lessons are what contribute balance to our dogs and is crucial to dogs that are exhibiting behavioral reactivity.',
  },
];

const Philosophy = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Container className={classes.container} maxWidth='md'>
      {/* {console.log(theme.palette.primary.main)} */}
      <Typography style={{textAlign: 'center', fontFamily: 'typeface-chivo'}} variant='h3'>Our Philosophy</Typography>

      <Typography className={classes.centered} variant='body1'>
        Barkville prides itself on being a fully immersive training company that offers support in every area of our dog’s lives. Through education and experienced based training, we want to educate owners in understanding how they can be the source to offering a balanced life full of love and partnership with their dogs. Think of every dog as a cup, and the water represents the areas of life that need to be fulfilled by owners everyday to achieve happiness and balance in our dog’s life. From years and years of studying k9 behavior, here are the four ‘water’ components that lead to a happy doggy dog fun-filled life. Dogs are most fulfilled when our humans offer Detachment, Leadership, Physical Exercise and Mental Enrichment.
      </Typography>

      <div style={{margin: '.5rem'}} />

      {panelDetails.map((item) => (
        <ExpansionPanel key={item.key}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <Typography variant='body1'>{item.heading}</Typography>
          </ExpansionPanelSummary>
          <div style={{margin: '1rem'}}>
            <Typography variant='body2'>{item.text}</Typography>
          </div>
        </ExpansionPanel>
      ))}
    </Container>
  );
};

export default Philosophy;

const useStyles = makeStyles(() => ({
  centered: {
    textAlign: 'center',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  subHeading: {
    float: 'left',
    fontWeight: 'bold',
    marginRight: '.5rem',
  },
}));
