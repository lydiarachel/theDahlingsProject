const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose')

const userSchema = new Schema({
  name: { type: String, required: true },
  knowledge: Array,
  interested: {type: Array, required: true},
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