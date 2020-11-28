const mongoose = require('mongoose');
const UserModel = require('./user.model');
const salt = 12;
const bcrypt = require('bcrypt');

const create = async (data) => {
    data.created_at = data.updated = new Date().toISOString();
    const hash = bcrypt.hashSync(data.password, salt);
    data.password = hash;
    console.log(data);
 return await UserModel.create(data);
};

//

const findAll = async (data) => {
    return await UserModel.find({},{password:0});

};

//

const findOne = async (_id) => {
    return await UserModel.findById(_id);

};
//
const updateOne = async (id, data) => {
    data.updated_at = new Date().toISOString();
    return await UserModel.update(id,data);

};
//
const deleteOne = async (id) => {
    return await UserModel.deleteOne(id);
}
// login
const login = async (userName,password) =>{

    const user = await UserModel.findOne({userName});

 if(user && bcrypt.compare(password, user.get('password')) ) {
         console.log('user:',user);
         // insert in subdocument 'login' in parent-document 'student'
         //const insert_login = await UserModel.findByIdAndUpdate(user._id);
         return user;
         
     }else{
         return false;
     }
 }




module.exports = { create, findAll, findOne, updateOne, deleteOne };