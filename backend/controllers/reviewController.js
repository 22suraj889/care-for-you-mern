const Review = require("../models/reviewModel");
const Ward = require("../models/wardModel");
const mongoose = require("mongoose");
const getReview = async (req, res) => {
  try {
    const allReviews = await Review.find();
    res.status(200).json(allReviews);
  } catch (error) {
    console.log(error);
  }
};

const postReview = async (req, res) => {
  const { id } = req.params;
  const { name, review, rating } = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send("No ward with that id");
    }
    const newReview = await Review.create({ name, review, rating });
    const currentWard = await Ward.findById(id);
    currentWard.wardReview.push(newReview._id);
    const updatedWard = await Ward.findByIdAndUpdate(id, currentWard, {
      new: true,
    });
    console.log(updatedWard);
    res.status(200).json({
      message: `New review added to the ward ${updatedWard.wardName}`,
    });
    console.log(newReview);
  } catch (error) {
    console.log(error);
  }
};

const voteReview = (req, res) => {
  const { id } = req.params;
  console.log(id);
  if (!req.userId) return res.json({ message: "Unauthenticated" });
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send("No review with that id");
    }
    const currentReview = Review.findById(id);
    let index = Review.votes.findIndex((id) => id === req.userId);

    // index == -1 means that the user who is logged in liked the review so that user's id will be inserted into the votedIds of the current review
    // when index != -1 means that the user who who is logged already liked the review and want to remove likes from the current review
    if (index === -1) {
      currentReview.votedIds.push(String(req.userId));
    } else {
      currentReview.votedIds = currentReview.votedIds.filter(
        (id) => id !== String(req.userId)
      );
    }
    const updatedReview = Review.findByIdAndUpdate(id, currentReview, {
      new: true,
    });
    res.json(updatedReview);
  } catch (error) {
    console.log(error);
  }
};
module.exports = { getReview, postReview, voteReview };
