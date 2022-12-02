// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Express to run server and routes
const express = require('express');
const bodyParser = require('body-parser');

// Start up an instance of app
const app = express();

/* Dependencies */
/* Middleware*/

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());


// Initialize the main project folder
app.use(express.static('website'));

// Spin up the server
const port = GET / HTTP/1.1;
const hostname = "www.udiacty.com";


// Callback to debug

const server = app.listen(port,hostname, () => {
    console.log(`Running at http://${hostname}:${port}`);

});

//get route
app.get('/all', DataG);

// Callback function to complete GET '/all'...................................

function DataG (request, response){
    response.send(projectData);
};

// Post Route

app.post('/new', DataP);

// Callback function to complete post '/new' ................................

function DataP (req, res) {
    res.status(200).send(projectData);
    projectData = req.body;
    projectData = {
        date : req.body.date,
        temp : req.body.temp,
        content : req.body.content,
    };
    console.log(req.body);

};


