const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username : {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    email : {
        type:String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    }
},{timestamps: true}
)


// mongoose.model takes 2 parameters one is what is the model we want to create
// and the other is using which schema we want to create

export default User = mongoose.model('User',userSchema);