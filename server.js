import express from 'express';
import minimist from 'minimist';
const argv = minimist(process.argv.slice(2));

const app = express();
const port = 3000;

const interval = argv.i || 500; // default 0.5 seconds
const timeout = argv.t || 2500; // default 2.5 seconds

const addZero = (timeNumber) => {
  return timeNumber > 9 ? timeNumber : `0${timeNumber}`;
}

const transformDate = (currentTime) => {
  const year = currentTime.getUTCFullYear();
  const month = addZero(currentTime.getUTCMonth() + 1);
  const day = addZero(currentTime.getUTCDate());
  const hours = addZero(currentTime.getUTCHours());
  const minutes = addZero(currentTime.getUTCMinutes());
  const seconds = addZero(currentTime.getUTCSeconds());

  return `${day}.${month}.${year}, ${hours}:${minutes}:${seconds}`;
}

app.get('/', (req, res) => {
  console.log('Start');

  const intervalTimer = setInterval(() => {
    const currentTime = new Date();
    console.log(transformDate(currentTime));
  }, interval);

  setTimeout(() => {
    clearInterval(intervalTimer);

    const currentTime = new Date();
    const timeUTC = transformDate(currentTime);
    console.log(timeUTC);

    console.log('Stop');
    res.send(timeUTC);
  }, timeout);
})

app.listen(port, () => {
  console.log('Server is listening on', port);
});