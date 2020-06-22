/* eslint-disable max-len */
import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Carousel} from 'react-responsive-carousel';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import ReactModal from 'react-modal';
// Assets and styles
import CancelIcon from '@material-ui/icons/Cancel';
import freya from '../images/freya-min.jpg';
import molly from '../images/molly-min.jpg';
import tide from '../images/tide-min.jpg';
import gypsy from '../images/gypsy-min.jpg';
import arev from '../images/arev.jpg';
import 'react-responsive-carousel/lib/styles/carousel.css';
import '../styles/carousel.css';

const items = [
  {
    key: 0,
    preview: 'Honestly, I definitely was not prepared for the challenges of having a German Shepherd in NYC.  She is smart, sassy, and spunky — all the things you want in a GSD, however,...',
    text: 'Honestly, I definitely was not prepared for the challenges of having a German Shepherd in NYC.  She is smart, sassy, and spunky — all the things you want in a GSD, however, it is a breed that needs special understanding and training, that I quickly realized I did not have.  Here is where Maya and Barkville came into our lives — to our rescue! \n\nWe have been part of the Barkville family since my sweet pup was only a couple of months old.  I have literally watched her transform from being extremely hyper and stubborn on a leash to much more respectful, and even walking with other dogs which is something I never thought possible! All of this comes from working with Barkville. \n\n As much as the training is for my pup, it is equally as much for me.  I can honestly say, they have the unique gift of training not only the animals, but the humans as well.  We do not leave our big girl with anyone besides Maya\'s team, whether it is for walks while we are at work, or for overnight sleepovers.  We trust them to take the best care of her, and they honestly treat my girl like their own.  Maya has become like family to us, and I KNOW it would not have been possible to have the dog I have now without them. Over the last few years, I have learned so much and continue to grow in our journey.  They truly help  make my dog and I be the best TEAM we can be!',
    image: freya,
    alt: 'A German Shepherd and her owner',
  },
  {
    key: 1,
    preview: 'We recently moved to New York from Atlanta and met Maya and her dog, Lukey, at the dog park. My dog, Molly, immediately took to Maya at the park and would not leave her side...',
    text: 'We recently moved to New York from Atlanta and met Maya and her dog, Lukey, at the dog park. My dog, Molly, immediately took to Maya at the park and would not leave her side. I had been looking for a dog walking and sitting service so I was very excited to learn that Maya recently opened a dog service business. We have been using her service for a week now and could not be happier!! \n\nEvery day, Maya spends an hour with Molly at the dog park. Molly gets a little lazy at times so Maya even chases her around at the park to ensure she gets her exercise. She also sends me tons of pictures and videos of her after her walk. Molly is always so happy when Maya comes over and so sad when she leaves - seriously, she pouts by the door lol. \n\nIt is such a great feeling to know that Molly is well taken care of while I am away at work. I cannot thank Maya enough for keeping my girl happy!!',
    image: molly,
    alt: 'A German Shepherd at a dog run',
  }, {
    key: 2,
    preview: 'I am so grateful to have had Maya come and care for my three sweet fur babies! I have two cats and a dog, and all three were loved and cared for both times I was gone. My cats are usually somewhat reserved around new people...',
    text: 'I am so grateful to have had Maya come and care for my three sweet fur babies! I have two cats and a dog, and all three were loved and cared for both times I was gone. My cats are usually somewhat reserved around new people, and I loved getting pictures of them cuddling with Maya! My dog also seemed to warm up very quickly, and he was so happy whenever he was around her! I got so many pictures of him on walks, cuddling and playing! I truly appreciated the care that Maya gave to all three of my babies, and I look forward to any opportunity in the future for her to be with them again!',
    image: tide,
    alt: 'A Kelpie sitting with a Beagle',
  },
  {
    key: 3,
    preview: 'Maya came into our life as a dog walker/trainer for our rescue yellow lab mix, Gypsy, that was having reactivity issues with other handlers. We are amazed everyday by what Maya has given to us..',
    text: `Maya came into our life as a dog walker/trainer for our rescue yellow lab mix, Gypsy, that was having reactivity issues with other handlers. We are amazed everyday by what Maya has given to us... she has helped Gypsy become a more confident and well-behaved dog. Maya improved Gypsy\n's leash manners within a short period of time and Gypsy is now the most amazing dog. People everywhere are impressed by Gypsy and I give all of the credit to Maya. She knows our Gypsy better than we do and she has taught us (and continues to teach us) how to communicate better with Gypsy. We feel lucky to have Maya in our life and we wouldn't recommend anyone else for Gypsy's daily walks and training.
    `,
    image: gypsy,
    alt: '',
  },
  {
    key: 4,
    preview: 'Maya is wonderful.  Warm, compassionate, honest, trustworthy, experienced, dedicated, and truly understands the nature of each individual dog. I met Maya while she was training...',
    text: `Maya is wonderful.  Warm, compassionate, honest, trustworthy, experienced, dedicated, and truly understands the nature of each individual dog.
    I met Maya while she was training a stubborn single minded terrier surrounded by multiple dogs including some aggressive untrained dogs.  The dog she was training remained calm and submissive.  That is when I realized that Maya is an amazing dog trainer.
    When I approached Maya to ask her if she would help me train my dog, her first comment was and I paraphrase: You know that training is about training me, the human.
    Having had three other dogs, I knew Maya knows her business – dog training.  Having had three other dogs why did I still ask to work with Maya?  Because each dog is different.
    Each dog is different and each dog has its own needs.  My dog is full of energy and has anxiety issues.  I gave Maya free reign of my apartment while she worked with my dog and I waited in the lobby.  When I came back at Maya’s request, I think she replaced my dog’s soul.  He was calm, gentle, submissive and most importantly HAPPY!  Ears back, smiling and tail wagging.  
    Moral of the story, if you are willing to be trained, Maya is your trainer.  Maya is passionate about her work and understands human and dog psychology.
    `,
    image: arev,
    alt: '',
  },
];

const Reviews = () => {
  const classes = useStyles();
  const [modalOne, setModalOne] = useState(false);
  const [modalTwo, setModalTwo] = useState(false);
  const [modalThree, setModalThree] = useState(false);
  const [modalFour, setModalFour] = useState(false);
  const [modalFive, setModalFive] = useState(false);

  return (
    <Container maxWidth='sm'>
      <Typography style={{textAlign: 'center', fontFamily: 'typeface-chivo'}} variant='h3'>Barkville Dogs</Typography>

      <Carousel autoPlay={false} showArrows={false} dynamicHeight={true}>

        <div>
          <img className={classes.image} src={items[0].image} alt={items[0].alt} />
          <Typography onClick={() => setModalOne(true)} className='legend' variant='body1'>{items[0].preview}</Typography>
          <ReactModal className={classes.modalContent} onClick={() => setModalOne(false)} isOpen={modalOne}>
            <CancelIcon
              className={classes.dismissButton}
              role='button'
              onKeyPress={() => setModalOne(false)}
              onClick={() => setModalOne(false)}
            />
            <Typography className={classes.modalText} variant='body2'>{items[0].text}</Typography>
          </ReactModal>
        </div>

        <div key={items[1].key}>
          <img className={classes.image} src={items[1].image} alt={items[1].key} />
          <Typography onClick={() => setModalTwo(true)} className='legend' variant='body1'>{items[1].preview}</Typography>
          <ReactModal className={classes.modalContent} onClick={() => setModalTwo(false)} isOpen={modalTwo}>
            <CancelIcon
              className={classes.dismissButton}
              role='button'
              onKeyPress={() => setModalTwo(false)}
              onClick={() => setModalTwo(false)}
            />
            <Typography className={classes.modalText} variant='body2'>{items[1].text}</Typography>
          </ReactModal>
        </div>

        <div key={items[2].key}>
          <img className={classes.image} src={items[2].image} alt={items[2].alt} />
          <Typography onClick={() => setModalThree(true)} className='legend' variant='body1'>{items[2].preview}</Typography>
          <ReactModal className={classes.modalContent} onClick={() => setModalThree(false)} isOpen={modalThree}>
            <CancelIcon
              className={classes.dismissButton}
              role='button'
              onKeyPress={() => setModalThree(false)}
              onClick={() => setModalThree(false)}
            />
            <Typography className={classes.modalText} variant='body2'>{items[2].text}</Typography>
          </ReactModal>
        </div>

        <div key={items[3].key}>
          <img className={classes.image} src={items[3].image} alt={items[3].alt} />
          <Typography onClick={() => setModalFour(true)} className='legend' variant='body1'>{items[3].preview}</Typography>
          <ReactModal className={classes.modalContent} onClick={() => setModalFour(false)} isOpen={modalFour}>
            <CancelIcon
              className={classes.dismissButton}
              role='button'
              onKeyPress={() => setModalFour(false)}
              onClick={() => setModalFour(false)}
            />
            <Typography className={classes.modalText} variant='body2'>{items[3].text}</Typography>
          </ReactModal>
        </div>

        <div className={classes.test} key={items[4].key}>
          <img className={classes.horizontalImage} src={items[4].image} alt={items[4].alt} />
          <Typography onClick={() => setModalFive(true)} className='legend' variant='body1'>{items[4].preview}</Typography>
          <ReactModal className={classes.modalContent} onClick={() => setModalFive(false)} isOpen={modalFive}>
            <CancelIcon
              className={classes.dismissButton}
              role='button'
              onKeyPress={() => setModalFive(false)}
              onClick={() => setModalFive(false)}
            />
            <Typography className={classes.modalText} variant='body2'>{items[4].text}</Typography>
          </ReactModal>
        </div>

      </Carousel>
    </Container>
  );
};

export default Reviews;

const useStyles = makeStyles(() => ({
  dismissButton: {
    float: 'right',
    padding: 5,
  },
  image: {
    maxHeight: 600,
    maxWidth: 450,
  },
  horizontalImage: {
    maxHeight: 450,
    maxWidth: 600,
  },
  modalContent: {
    position: 'absolute',
    marginTop: '10%',
    marginBottom: '10%',
    top: '40px',
    left: '40px',
    right: '40px',
    bottom: '40px',
    border: '1px solid #ccc',
    background: '#fff',
    overflow: 'scroll',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '20px',
  },
  modalText: {
    fontFamily: 'typeface-overpass',
    fontSize: 18,
    // maxWidth: 1000,
    marginBottom: 10,
  },
  test: {
    maxHeight: 200,
  },
}));
