const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const auth = require("../middleware/auth");
const {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} = require("../controllers/postController");

// Validation rules
const postValidation = [
  body("title").notEmpty().withMessage("Title is required"),
  body("content").notEmpty().withMessage("Content is required"),
  body("excerpt").notEmpty().withMessage("Excerpt is required"),
];

// Public routes
router.get("/", getAllPosts);
router.get("/:id", getPostById);

// Protected routes
router.post("/", auth, postValidation, createPost);
router.put("/:id", auth, postValidation, updatePost);
router.delete("/:id", auth, deletePost);

module.exports = router;
