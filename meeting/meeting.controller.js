const mongoose = require('mongoose');
const MeetingModel = require('./meeting.model');


//
   const create = async (_id, data) => {
       data.user=_id;
       data.created_at = data.updated_at = new Date().toISOString();
    return await MeetingModel.create(data);
   };
   
   //
   const findAll = async () => {
       return await MeetingModel.find();
   
   };
   // findAllByUSerId
   const findAllByUSerId = async (_id) => {
    return await MeetingModel.find({user:_id});

};
   
   //
   const findOne = async (_id) => {
       return await MeetingModel.findById(_id);
   
   };
   //
   const updateOne = async (_id, data) => {
    data.updated_at = new Date().toISOString();
   // const gmt = await MeetingModel.findOne({user});
    //console.log('gmt:', gmt);
   /* data.invite_people = { 
        name: 'seed',
        email:'seed@test.de',
        isConfirmed:'false',

    }
    data.member = { 
        //name: 'memo',
        //email:'memo@test.de',
        isConfirmed:'true',

    }*/
    
        return await MeetingModel.findByIdAndUpdate(_id,{
            data,
            $push:{
                invite_people:[{
                    name:data.invite_people.name,
                    email:data.invite_people.email,
                    isConfirmed: data.invite_people.isConfirmed
                }],
                member: [{
                    name:data.member.name,
                    email:data.member.email,
                    isConfirmed: data.member.isConfirmed
                }]
            }
        });
    
       
   
   };
   //
   const deleteOne = async (id) => {
       return await MeetingModel.deleteOne(id);
   }
   
   




module.exports = { create, findAll, findOne, updateOne, deleteOne, findAllByUSerId };