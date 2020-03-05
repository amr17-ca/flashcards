/*

doctype html
html(lang="en")
  head
    title Flashcards
  body
    header
      h1 Flashcards
    section#content
      ul
        each color in colors
            li= color
      h2= prompt
          if hint
            p
                i Hint: #{hint}
          else
            p No hint for you.
      footer
        p An app to help you study
const express = require('express');


doctype html
h2 Basic HTML Table
table(style='width:100%')
  tr
    th Firstname
    th Lastname
    th Age
  tr
    td Jill
    td Smith
    td 50
  tr
    td Eve
    td Jackson
    td 94
  tr
    td John
    td Doe
    td 80

     
*/
// iterate over an array



const names = [
    {
    Firstname: "Jill",
    Lastname: "Smith",
    Age: 50
    },
    {
        Firstname: "John",
        Lastname: "doe",
        Age: 80
    }

      ];

const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple'
  ];
  


const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/cards', (req, res) => {
    res.render('card', { prompt: "Who is buried in Grant's tomb?", colors: colors} );
});

app.get('/hello', (req, res) => {
  res.render('hello');
});

app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
}); 