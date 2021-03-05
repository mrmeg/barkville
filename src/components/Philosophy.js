/* eslint-disable max-len */
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const panelDetails = [
  {
    key: 0,
    heading: 'Leadership',
    // eslint-disable-next-line quotes
    text: [`Have you ever noticed your dog loves leading you to pee on every tree, to greet every dog or will even fight to lead you back to your home? These small behaviors can be indications that you might be lacking leadership in your relationship with your dog. This is why when we teach leadership — we focus on teaching you to the dog psychology that coincides with being your dog's leader, provider and protector in all areas of their life. In almost all trainings we assess the walk, feeding time, social situations with dogs, humans, city stimuli and even affection toward your dog so that we can support you in nurturing and guiding positive behaviors in your dog’s life.`],
  },
  {
    key: 1,
    heading: 'Socialization',
    text: ['Does your dog get overexcited, have negative reactions, or stop mid-walk to say hi to another dog? Some of you might say, “yes they do this, but they’re always friendly.” Whether that be the case or not, this sect of training focuses on the ability to teach your dog to coexist and respect other dogs regardless of their breed, temperament, or age. Just like you might be a friendly person, it doesn’t mean you will get along with everyone single person you come in contact with. Nevertheless, you still need to be respectful of others different from you and your dog does too.'],
  },
  {
    key: 2,
    heading: 'Diet & Exercise',
    text: ['Movies, books, and the internet all contribute to a culture where the focal point is just all about burning your dog’s physical energy so that they are “happy.” However, science, studies, and experience have taught us that exercise is not the only way for dogs to be happy. Just like weight-loss programs, they are most effective when you eat a good diet AND you exercise to fit what your body can physically handle. No one goes to the gym on day one and begins lifting heavy weights with no problem and without potentially injuring themselves. This is true for dogs too, especially puppies! Through our training, we will demonstrate different exercise routines you can practice while also assessing your dog’s diet to keep your dogs fit without overdoing it or creating potentially long-term issues to your dog’s health.'],
  },
  {
    key: 3,
    heading: 'Mental Engagement',
    text: [
      'The best way to think of enrichment is to think about a young child’s school day. Everyday, kids in school learn how to stay in a single file line, how to write their ABC’s, how to play, share toys, follow societal rules like raising your hand in class and socialize with people different from us. If school were just recess, then it wouldn’t be school. Well, believe it or not, our dogs need mental structure like that and not just recess (dog parks, daycare, on leash play sessions etc.). Dogs, especially working breeds, need to be mentally stimulated so that they can fulfill their natural-born purpose in life that stems from their breed origin',
      <br />,
      <br />,
      'I know that there were LOTS of people who felt lost when quarantine hit — people would dive into puzzles, read, listen to podcasts, learn instruments, etc. As animals, we all like doing things that stimulate our brains especially when we are feeling deprived. That is why offering those true dog activities to our pets allow us to deepen our relationships with them and offer the ultimate source of balance in their lives.',
    ],
  },
];

const Philosophy = () => {
  const classes = useStyles();
  // const theme = useTheme();

  return (
    <Container className={classes.container} maxWidth='md'>
      <Typography style={{textAlign: 'center', fontFamily: 'typeface-chivo'}} variant='h3'>Our Philosophy</Typography>

      <Typography className={classes.centered} variant='body1'>
        Barkville prides itself on being a fully immersive training company that offers support in every area of our dog’s lives. Through education and experienced-based training, we want to educate owners in understanding how they can be the source of a balanced life full of love and partnership with their dogs. To support our dog’s health, we focus on four qualities: Leadership, Socialization, Physical Exercise, and Mental Enrichment.
      </Typography>

      <div style={{margin: '.5rem'}} />

      {panelDetails.map((item) => (
        <Accordion key={item.key}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <Typography style={{fontWeight: 'bold'}} variant='body1'>{item.heading}</Typography>
          </AccordionSummary>
          <div style={{margin: '1rem'}}>
            <Typography variant='body2'>{item.text}</Typography>
          </div>
        </Accordion>
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
