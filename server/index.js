const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const signuproute = require('./routes/signuproute');
const loginroute = require('./routes/loginroute');


const app = express();


app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
app.use("/user",signuproute)
app.use("/auth",loginroute)





app.listen(3000 , () => {
    console.log('Server started on port 3000');
});
