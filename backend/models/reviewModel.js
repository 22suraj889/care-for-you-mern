const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
  name: { type: String, required: true },
  review: { type: String, required: true },
  rating: { type: Number, default: 8, min: 1, max: 10 },
  votes: { type: Number, default: 0 },
  createdAt: { type: Date, default: new Date() },
  votedIds: { type: [String], default: [] },
});

module.exports = mongoose.model("review", reviewSchema);
