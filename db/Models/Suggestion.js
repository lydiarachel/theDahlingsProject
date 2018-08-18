const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const suggestionSchema = new Schema({
  suggestion: { type: String, required: true },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'},
  liked: { type: Number, required: true},
  date: { type: Date, default: Date.now }
});

const Suggestion = mongoose.model("Suggestion", suggestionSchema);

module.exports = Suggestion;