const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  Text: {
    type: String,
    required: true,
  },
  image : {
    type : String,
  },
   user :{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  likes: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model('Post', postSchema);