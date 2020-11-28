const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
var mongoose = require('mongoose');
const userRoutes = require('./user/user.routes');
const meetingRoutes = require('./meeting/meeting.routes');

//
 
//Set up default mongoose connection

const uri = "mongodb+srv://mostafa:XJ3onEpP5yceOej3@cluster0.nq5cu.mongodb.net/dbHome?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true })
.then( () => {
console.log('cloud db is connected!!');
}).catch( e => console.log(e));


// middelware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));
//


// 
app.use('/api/usr', userRoutes);
//
app.use('/api/mt', meetingRoutes);


//
//const server = http.Server(app);
//server.listen(3000);

// listen to the Server
app.listen(3000, () => {
  console.log(`Server running on 3000`);
});


