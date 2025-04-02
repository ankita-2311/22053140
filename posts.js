const express = require("express");
const { getTopOrLatestPosts } = require("../controllers/postsController");

const router = express.Router();
router.get("/", getTopOrLatestPosts);

module.exports = router;