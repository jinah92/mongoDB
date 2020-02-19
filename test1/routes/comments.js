const express = require('express');
const Router = express.Router();
const Comment = require('../schemas/comment');

Router.post('/delete', async (req, res)=>{
    try{
        const result = await Comment.remove({_id:req.body._id});   
        res.json({result, message:"comment 삭제 성공"});
    }catch(err){
        console.log(err);
        res.json({message: false});
    }
});
Router.post('/update', async (req, res)=>{
    try{
        const result = await Comment.update({_id: req.body.commenter},                   //{찾아올 객체 id}, {update할 항목}
            {commenter:req.body.commenter, comment:req.body.comment});       
        res.json({result, message: "comment 수정완료"});
    }catch(err){
        console.log(err);
        res.json({message: false});
    }
});
Router.post('/add', async (req, res)=>{
    try{
        const comment = new Comment({
            commenter: req.body.commenter,
            comment: req.body.comment,
        });
        console.log(comment);
        const comments = await comment.save(req.body.commenter, (err, result)=>{
            if(err){
                console.log(err);
                res.json({message: false});
            }else{
                return Comment.populate(result, {path: 'commenter'});
            }
        });
        res.status(201).json({comments, message: "comment 추가 성공"});
    } catch(err){
        console.log(err);
        res.json({message: false});
    }
});
Router.post('/getAllComments', async (req, res)=>{
    try{
        const comments = await Comment.find({}).populate('commenter', (comments)=>{
        console.log(comments);
        });
        res.json({comments});
    }catch(err){
        console.log(err);
        res.json({message: false});
    }
});

module.exports = Router;