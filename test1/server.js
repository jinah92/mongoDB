const express = require('express');
const path = require('path');
const connect = require('./schemas');

connect();

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// app.use('/member', require('./routes/memberRouter'));
app.use('/comment', require('./routes/comments'));
app.use('/member', require('./routes/mongo_userRouter'));
app.listen(8080, ()=>{
    console.log('8080 server listen...');
});