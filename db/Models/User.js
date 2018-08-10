const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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

const User = mongoose.model("User", bookSchema);

module.exports = User;