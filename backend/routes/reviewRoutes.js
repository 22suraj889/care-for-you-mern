const express = require("express");
const router = express.Router();
const {
  postReview,
  getReview,
  voteReview,
} = require("../controllers/reviewController");

router.post("/:id", postReview); // id is for ward in which review is given
router.get("/", getReview);
router.patch("/:id/vote", voteReview); // id is for review for which vote is given

module.exports = router;
