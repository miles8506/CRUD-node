const mongoose = require('mongoose'); //引入第三方模塊
const { Schema } = mongoose;  //引入Schema
mongoose.connect('mongodb://localhost/member', { useNewUrlParser: true, useUnifiedTopology: true }); //存到哪一個數據庫中(若原先沒有該數據庫，那等到有數據進入後系統就會先自動創建數據庫)
const MemberSchema = new Schema({ //創建了UserSchema的這個構造函數
    uname: {
        type: String,
        required: true,
    },
    sex: {
        type: Number,
        default: 0,
        enum: [0, 1]
    },
    age: {
        type: String,
        required: true
    },
    habbies: {
        type: String,
    }
});
module.exports = mongoose.model('Member', MemberSchema);  //將該構造函數建立為一個集合(第一個參數就是你的集合名且開頭需大寫，而系統會在存入資料庫時將該名稱轉為小寫並且是複數的方式來顯示，像這裡就是users;第二個參數是你要schema的構造函數名稱)