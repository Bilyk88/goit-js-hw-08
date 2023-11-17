import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const KEY_TIME = "videoplayer-current-time";

player.on('timeupdate', throttle(timeUpdate, 1000));

function timeUpdate(data) {
    const currentTime = data.seconds;
    localStorage.setItem(KEY_TIME, JSON.stringify(currentTime));
}

const savedTime = localStorage.getItem(KEY_TIME);

player.setCurrentTime(savedTime);
