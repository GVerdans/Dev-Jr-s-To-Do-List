import Timer from './modules/timer';

const timerOutput = document.querySelector('.timer');
const timer = new Timer(30, timerOutput);
timer.start();
