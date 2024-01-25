const { Schema, model } = require('mongoose');
const friendSchema = require('./friend');

// Schema to create User model
const userSchema = new Schema(
  {
    first: {
      type: String,
      required: true,
      max_length: 15,
    },
    last: {
      type: String,
      required: true,
      max_length: 50,
    },
    email: {
      type: String,
      required: true,
      max_length: 50,
    },
    thoughts: {
      
    } [thoughtsSchema],
    },
  {
    friends: [friendSchema],
    },
    toJSON: {
      getters: true,
    },
  });

const User = model('user', userSchema);

module.exports = User;
