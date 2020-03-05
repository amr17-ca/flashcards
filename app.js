const express = require('express');
// iterate over an array
const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple'
];
const sandboxNames = [{ First: 'Paul', Last: 'Jones', Age: 30 },
{ First: 'David', Last: 'Smith', Age: 40 },
{ First: 'Jason', Last: 'Camp' },
{ First: 'Bella' },
{ Last: 'Jones' }];


const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index');
});
app.get('/table', (req, res) => {
    res.render('table', { sandboxNames: sandboxNames });
});


app.get('/cards', (req, res) => {
    res.render('card', { prompt: "Who is buried in Grant's tomb?", colors: colors });
});

app.get('/hello', (req, res) => {
    res.render('hello');
});

app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});