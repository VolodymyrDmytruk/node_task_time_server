import express from 'express';
import minimist from 'minimist';
const argv = minimist(process.argv.slice(2));

const app = express();

app.get('/', (req, res) => {
	console.log('Start');
	res.send('some text');
})

app.listen(3000);


const interval = argv.interval || 500; // за замовчуванням 500 мс (0.5 секунди)
const timeout = argv.timeout || 2500; // за замовчуванням 2500 мс (2.5 секунд)

console.log('Interval:', interval);
console.log('Timeout:', timeout);
let now = new Date();