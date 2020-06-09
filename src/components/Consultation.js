import React, { useState } from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert';

const Consultation = () => {
  const classes = useStyles();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dogInfo, setDogInfo] = useState('');
  const [dogProbs, setdogProbs] = useState('');
  const [message, setMessage] = useState(null);

  const handleSubmit = async () => {
    const data = {
      firstName,
      lastName,
      email,
      phone,
      dogInfo,
      dogProbs,
    };

    const url = 'https://barkville-server.herokuapp.com/api/consult';

    try {
      const res = await axios.post(url, {...data});
      setMessage(res.data);
    } catch (error) {
      console.log(error);
      setMessage('Message was unable to be delivered. Sorry!');
    }
  };

  const renderMessage = () => <Alert severity='info' onClick={() => setMessage(null)}>{message}</Alert>;

  return (
    <Container maxWidth='sm'>
      <Typography style={{textAlign: 'center', fontFamily: 'typeface-chivo'}} variant='h3'>Book a Consultation</Typography>

      {message
        ? renderMessage()
        : null
      }

      <div className={classes.form}>
        <TextField
          fontFamily='typeface-overpass'
          variant='outlined'
          margin='normal'
          id='firstName'
          label='First Name'
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
        <TextField
          fontFamily='typeface-overpass'
          variant='outlined'
          margin='normal'
          id='lastName'
          label='Last Name'
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
        <TextField
          fontFamily='typeface-overpass'
          variant='outlined'
          margin='normal'
          id='email'
          label='Email Address'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          fontFamily='typeface-overpass'
          variant='outlined'
          margin='normal'
          id='phone'
          label='Phone Number'
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
        <TextField
          fontFamily='typeface-overpass'
          multiline
          variant='outlined'
          margin='normal'
          id='dogInfo'
          // eslint-disable-next-line quotes
          label={`Your dog's age, breed, and relevant medical information`}
          value={dogInfo}
          onChange={(event) => setDogInfo(event.target.value)}
        />
        <TextField
          fontFamily='typeface-overpass'
          multiline
          variant='outlined'
          margin='normal'
          id='dogProbs'
          label='Describe any issues you are facing with your dog'
          value={dogProbs}
          onChange={(event) => setdogProbs(event.target.value)}
        />

        <button onClick={() => handleSubmit()} className={classes.button} type='button'>Submit</button>
      </div>
    </Container>
  );
};

export default Consultation;

const useStyles = makeStyles(() => ({
  button: {
    height: 50,
    width: 100,
    margin: '0 auto',
    borderWidth: 1,
    borderRadius: 25,
    borderColor: 'black',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  messageBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
