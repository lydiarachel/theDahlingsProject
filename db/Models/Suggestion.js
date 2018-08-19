const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const suggestionSchema = new Schema({
  title : {type: String, required: true},
  suggestion: { type: String, required: true },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'},
  liked: { type: Number, default: 0},
  category: {type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Suggestion = mongoose.model("Suggestion", suggestionSchema);

module.exports = Suggestion;