const mongoose = require('mongoose');
const {Schema} = mongoose;
const userSchema = new Schema({     //새로운 스키마 생성
    name: {
        type: String,
        required: true, //not null
        unique: true,   //유일
    },
    age: {
        type: Number,
        required: true,
    },
    married: {
        type: Boolean,
        required: true,
    },
    comment: String,    //required가 true 일 피요가 없음 (중복 허용)
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('User', userSchema);    /* (첫번째 인자) collection 이름 , (두번째 인자) 스키마 이름 */