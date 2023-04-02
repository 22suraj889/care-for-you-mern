const express = require("express");
const router = express.Router();
const { postData, getData } = require("../controllers/wardController");
const auth = require("../middlewares/auth");
router.post("/", auth, postData);
router.get("/", auth, getData);

module.exports = router;
