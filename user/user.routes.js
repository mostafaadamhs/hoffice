const express = require('express');
const userRoutes = express.Router();
const controller = require('./user.controller') 
const UserModel = require('./user.model');
const bcrypt = require('bcrypt');

// post
userRoutes.post('/user/add', async (req, res) => {
    console.log('add user routing');
    
   await controller.create(req.body)
    .then(th => res.json(th))
    .catch(e => res.json(e))
});


// get one
userRoutes.get('/user/getone/:_id', async (req, res) => {
    console.log(req.params._id);
   // await controller.create(req.params._id)
    await UserModel.findById(req.params._id)
    .then(th => res.json(th))
    .catch(e => res.json(e))
});

// update one
userRoutes.put('/user/update/:_id', async (req, res) => {
    await controller.create(req.params._id)
    .then(th => res.json(th))
    .catch(e => res.json(e))
});


// delete one
userRoutes.delete('/user/delete/:_id', async (req, res) => {
    await controller.create(req.params._id)
    .then(th => res.json(th))
    .catch(e => res.json(e))
});


// login
userRoutes.post('/user/login', async (req, res) => {
    console.log('add user routing');
    userName = req.body.userName;
    password = req.body.password;
    
   await controller.login(userName, password)
    .then(th => res.json(th))
    .catch(e => res.json(e))
});






module.exports = userRoutes;
