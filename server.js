
const express = require("express")
const app = express()
const PORT = 3000

// Make a route '/greeting'that sends a generic greeting to the screen like "Hello, stranger".
app.get('/greeting', (request, response) => {
    response.send("Hello, stranger")
})

// Give the greetingroute a param /:name

app.get("/name/:firstname", (req, res) => {
    res.send(req.params.firstname + " " + req.query.last);
  });

//   When hitting the route, the page should display a message such as 
// "Hello, ", or "What's up, <name>", or "<name>! It's so great to see you!"
//  (ex. hitting '/greeting/Jimmy-boy'should display Wow! Hello there, Jimmy-boyon the page).

app.get('/greeting/:name', (req, res) => {
    res.send('Wow! Hello there, ' + req.params.name)
})

// TIP CALCULATOR 
// Your app should have a route of '/tip'and it should expect 2 params.
// One should be totaland one should be tipPercentage.
// When hitting the route, the page should display how much your tip 
// will be based on the total amount of the bill and the tip percentage.
// (ex. hitting '/tip/100/20'should display 20on the page).

app.get('/tip/:total/:topPercentage', (req, res) => {
    res.send('Your tip is: ' + parseInt(req.params.tipPercentage))
})


app.listen(PORT, () => {
    console.log('Express is listening on port', PORT)
})

// MAGIC 8 BALL 

const express = require('express');

// initilize the express application
const app = express();
 // constant
const port = 3000;

const magicBall = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
//  cached elements references
let randomAnswers = magicBall[Math.floor(Math.random() * magicBall.length)]

// define our routes

app.get('/greeting/:name', (req, res) => {
    res.send('Wow! Hello there, ' + req.params.name)
})

app.get('/tip/:total/:tipPercentage', (req, res) => {
     res.send('Your tip is: ' + parseInt((req.params.tipPercentage/100)*req.params.total))
})

app.get('/magic/:id', (req, res) => {

    res.send(`
       <html>
           <body>
           <br>
                <p>${req.params.id}?</p>
                <h1>${randomAnswers}</h1>
           </body>
       </html>
     `)
})

// listen to port   
app.listen(port, () => {
    console.log('Express is listening on port', port)
})