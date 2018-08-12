const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gistSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: false },
  body: {type: String, required: true },
  date: { type: Date, default: Date.now },
  category:{type: String, required: true},
  liked:{type: Number, default: 0},
  comments:[{
    type: Schema.Types.ObjectId,
    ref: "Comment"
  }]
});

const Gist = mongoose.model("Gist", gistSchema);

module.exports = Gist;