const mongoose = require('mongoose');

const run = async () => {
    await mongoose.connect("mongodb://127.0.0.1:27017/codecraze");
    console.log("Connected to myDB");
  }

  run()
.catch((err) => console.error(err))


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
    },
    posts: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Post',
        }
    ]
});


module.exports = mongoose.model('User', userSchema);