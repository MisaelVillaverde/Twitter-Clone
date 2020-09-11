import React, { useState } from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@material-ui/core';
import db from './firebase';
import firebase from 'firebase';

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection('posts').add({
      displayName: 'Anonymous',
      username: 'anonymous',
      verified: true,
      text: tweetMessage,
      avatar:
        'https://media2.giphy.com/media/l1J9HDdEWq7rAs1hu/giphy.gif?cid=ecf05e47ktmc3v7ghg1ma3suspdqkyk2hb55o5pbhoet9zr7&rid=giphy.gif',
      image: tweetImage,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setTweetMessage('');
    setTweetImage('');
  };

  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox__input'>
          <Avatar src='https://media2.giphy.com/media/l1J9HDdEWq7rAs1hu/giphy.gif?cid=ecf05e47ktmc3v7ghg1ma3suspdqkyk2hb55o5pbhoet9zr7&rid=giphy.gif' />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type='text'
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className='tweetBox__imageInput'
          placeholder='Optional. Enter image URL'
          type='text'
        />
        <Button
          onClick={sendTweet}
          type='submit'
          className='tweetBox__tweetButton'
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
