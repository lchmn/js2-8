import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

document.addEventListener('DOMContentLoaded', () => {
  const iframe = document.getElementById('vimeo-player');
  const player = new Player(iframe);

  player.on('timeupdate', throttle(function(event) {
    localStorage.setItem('videoplayer-current-time', event.seconds);
  }, 1000));

  const savedTime = localStorage.getItem('videoplayer-current-time');
  if (savedTime) {
    player.setCurrentTime(savedTime);
  }
});
