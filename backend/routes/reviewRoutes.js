const express = require("express");
const router = express.Router();
const {
  postReview,
  getReview,
  voteReview,
} = require("../controllers/reviewController");
const auth = require("../middlewares/auth");

router.post("/:id", auth, postReview); // id is for ward in which review is given
router.get("/", auth, getReview);
router.patch("/:id/vote", auth, voteReview); // id is for review for which vote is given

module.exports = router;
