const mongoose = require('mongoose');

module.exports=()=>{
    const connect = ()=>{
        if(process.env.NODE_ENV !== 'production'){
            mongoose.set('debug', true);
        }
        mongoose.connect('mongodb://localhost:27017/nodejs', {dbName: 'nodejs'}, (err)=>{
            if(err){
                console.log("connection error!", err);
            }else{
                console.log('connection OK!');
            }
        });
    };
    connect();
    mongoose.connection.on('error', (err)=>{    //on: 이벤트 등록 메소드
        console.log('mongoDB 연결 에러', err);
    });   
    mongoose.connection.on('disconnected', ()=>{
        console.log('Retry Connection ...');
        connect();
    });
    require('./user');
    require('./comment');
};