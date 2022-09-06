import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const myPlayer = new Player(iframe);

const PLAYER_STORAGE_KEY = 'videoplayer-current-time';

myPlayer.on(
    'timeupdate',
    throttle(function () {
      myPlayer.getCurrentTime().then(function (seconds) {
        localStorage.setItem(PLAYER_STORAGE_KEY, seconds);
      });
    }, 1000)
  );
  
  myPlayer.setCurrentTime(localStorage.getItem(PLAYER_STORAGE_KEY) || 0);
  