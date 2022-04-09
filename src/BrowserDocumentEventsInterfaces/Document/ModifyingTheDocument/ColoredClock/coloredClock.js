const actionButtonsContainer = document.body.querySelector('.actionButtonsContainer');

const hoursSpan = document.body.querySelector('.hours');
const minutesSpan = document.body.querySelector('.minutes');
const secondsSpan = document.body.querySelector('.seconds');

function formatTime(num) {
	return num < 10 ? '0' + num : num;
}

function updateTime() {
	console.log('updating')  
  const now = new Date();
  hoursSpan.innerHTML = formatTime(now.getHours());
 	minutesSpan.innerHTML = formatTime(now.getMinutes());
  secondsSpan.innerHTML = formatTime(now.getSeconds());
}

let timerId;

function clockStart() { // run the clock
  if (!timerId) { // only set a new interval if the clock is not running
    timerId = setInterval(updateTime, 1000);
  }
  updateTime(); // (*)
}

function clockStop() {
  clearInterval(timerId);
  timerId = null; // (**)
}

const startButton = document.createElement('button');
const stopButton = document.createElement('button');
startButton.innerHTML = 'START';
stopButton.innerHTML = 'STOP';
startButton.onclick = () => clockStart();
stopButton.onclick = () => clockStop();
actionButtonsContainer.append(startButton);
actionButtonsContainer.append(stopButton);