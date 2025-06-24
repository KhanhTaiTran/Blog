const Post = require("../models/Post");
const User = require("../models/User");
const { validationResult } = require("express-validator");

// Get all posts
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({ published: true })
      .populate("author", "name")
      .sort({ publishedAt: -1 });

    const formattedPosts = posts.map((post) => ({
      id: post._id,
      title: post.title,
      excerpt: post.excerpt,
      author: post.author.name,
      createdAt: post.publishedAt || post.createdAt,
      tags: post.tags,
    }));

    res.json(formattedPosts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get single post
exports.getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate("author", "name");

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    const formattedPost = {
      id: post._id,
      title: post.title,
      content: post.content,
      author: post.author.name,
      createdAt: post.publishedAt || post.createdAt,
      tags: post.tags,
    };

    res.json(formattedPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Create new post
exports.createPost = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, content, excerpt, tags, published } = req.body;

    const post = new Post({
      title,
      content,
      excerpt,
      author: req.user.id,
      tags: tags || [],
      published,
      publishedAt: published ? new Date() : null,
    });

    await post.save();
    res.status(201).json({ message: "Post created successfully", post });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Update post
exports.updatePost = async (req, res) => {
  try {
    const { title, content, excerpt, tags, published } = req.body;

    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    // Check if user owns the post or is admin
    if (post.author.toString() !== req.user.id && req.user.role !== "admin") {
      return res.status(403).json({ message: "Not authorized" });
    }

    post.title = title || post.title;
    post.content = content || post.content;
    post.excerpt = excerpt || post.excerpt;
    post.tags = tags || post.tags;
    post.published = published !== undefined ? published : post.published;

    if (published && !post.publishedAt) {
      post.publishedAt = new Date();
    }

    await post.save();
    res.json({ message: "Post updated successfully", post });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete post
exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    // Check if user owns the post or is admin
    if (post.author.toString() !== req.user.id && req.user.role !== "admin") {
      return res.status(403).json({ message: "Not authorized" });
    }

    await post.remove();
    res.json({ message: "Post deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
