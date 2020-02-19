const mongoose = require('mongoose');
const {Schema} = mongoose;
const {Types:{ObjectId}} = Schema;
const commentSchema = new Schema({
    commenter:{
        type: ObjectId,
        required: true,
        ref: 'User',        //ref: 외래키 역할
    },
    comment:{
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Comment', commentSchema);    /* (첫번째 인자) collection 이름 , (두번째 인자) 스키마 이름 */