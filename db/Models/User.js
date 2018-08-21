const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose')

const userSchema = new Schema({
  email:{type: String, unique: true},
  name: { type: String, required: true },
  googleId: { type: String, unique: true, required: false},
  password: { type: String, required: false},
  knowledge: Array,
  interested: Array,
  imageUrl: String,
  comments:[{
    type: Schema.Types.ObjectId,
    ref: "Comment"
  }],
  gists:[{
      type: Schema.Types.ObjectId,
      ref: 'Gist'
  }],
  suggestions:[{
    type: Schema.Types.ObjectId,
    ref: 'Suggestion'
  }]
});

userSchema.plugin(passportLocalMongoose)

const User = mongoose.model("User", userSchema);


module.exports = User;