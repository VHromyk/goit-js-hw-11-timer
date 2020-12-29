const daysRef = document.querySelector('[data-value = "days"]');
const hoursRef = document.querySelector('[data-value = "hours"]');
const minsRef = document.querySelector('[data-value = "mins"]');
const secsRef = document.querySelector('[data-value = "secs"]');




const timer = {
  start() {
const targetDate = new Date('Dec 21, 2020').getTime();
    const currentTime = Date.now();
    const setIntervalId = setInterval(() => {
      const deltaTime = targetDate - Date.now();
      if (deltaTime < 0) {
        console.log('Время вышло!')
        clearInterval(setIntervalId);
        return;
      }
       updateTime(deltaTime);
    }, 1000);
  }
};

function updateTime(deltaTime) {
    const days = pad(Math.floor(deltaTime / (1000 * 60 * 60 * 24)));
  const hours = pad(Math.floor((deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const minutes = pad(Math.floor((deltaTime % (1000 * 60 * 60)) / (1000 * 60)));
  const seconds = pad(Math.floor((deltaTime % (1000 * 60)) / 1000));


  daysRef.textContent = `${days}`;
  hoursRef.textContent = `${hours}`;
  minsRef.textContent = `${minutes}`;
  secsRef.textContent = `${seconds}`;
}

function pad(value) {
  return String(value).padStart(2, '0');
}

timer.start();



