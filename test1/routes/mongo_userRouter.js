const express = require('express');
const Router = express.Router();
const User = require('../schemas/user');

Router.post('/delete', async (req, res)=>{
    try{
        const result = await User.remove({_id:req.body._id});   
        res.json({result});
    }catch(err){
        console.log(err);
        res.json({message: false});
    }
});
Router.post('/update', async (req, res)=>{
    try{
        const result = await User.update({_id: req.body._id},                   //{찾아올 객체 id}, {update할 항목}
            {name:req.body.name, age:req.body.age, married:req.body.married});       
        res.json({result});
    }catch(err){
        console.log(err);
        res.json({message: false});
    }
});
Router.post('/add', async (req, res)=>{
    try{
        const user = new User(req.body);    //user 객체 생성   (User: 구조)
        const users = await user.save();    // 주의! user (User X)
        res.json({users});
    }catch(err){
        console.log(err);
        res.json({message: false});
    }
});
Router.post('/getAllMember', async (req, res)=>{
    try{
        const users = await User.find({});    //{조건} -> 조건이 없을 시 모든 값을 리턴(select all)
        res.json({users});
    }catch(err){
        console.log(err);
        res.json({message: false});
    }
});

module.exports = Router;