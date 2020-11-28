const express = require('express');
const meetingRoutes = express.Router();
const controller = require('./meeting.controller') 
const MeetingModel = require('./meeting.model');


// post
meetingRoutes.post('/meeting/add/:_id', async (req, res) => {
    await controller.create(req.params._id,req.body)
    .then(th => res.json(th))
    .catch(e => res.json(e))
});

// get all meetings
meetingRoutes.get('/meeting/all', async (req, res) => {
    await controller.findAll()
    .then(th => res.json(th))
    .catch(e => res.json(e))
});

// get one meeting by meeting_id
meetingRoutes.get('/meeting/getone/:_id', async (req, res) => {
    await controller.findOne(req.params._id)
    .then(th => res.json(th))
    .catch(e => res.json(e))

});

// get all by user_id
meetingRoutes.get('/meeting/getall/byuser/:_id', async (req, res) => {
    await controller.findAllByUSerId(req.params._id)
    .then(th => res.json(th))
    .catch(e => res.json(e))

});

// update one
// insert new members in member document
meetingRoutes.put('/meeting/update/:_id', async (req, res) => {
   // const userId = req.params.usr_id;
    const _id = req.params._id
    console.log(_id);
    await controller.updateOne(_id,req.body)
     //await MeetingModel.findByIdAndUpdate(_id,req.body)
    .then(th => res.json(th))
    .catch(e => res.json(e))
});


// delete one meeting by id and user_id
meetingRoutes.delete('/meeting/delete/:_id', async (req, res) => {
    await controller.deleteOne(req.params._id)
    .then(th => res.json(th))
    .catch(e => res.json(e))
});









module.exports = meetingRoutes;
