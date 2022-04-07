
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

