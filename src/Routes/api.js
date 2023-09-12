const express = require("express");

const blogController = require("./src/Controllers/blogController");
const commentController = require("./src/Controllers/commentController");
const messageController = require("./src/Controllers/messageController");
const portfolioController = require("./src/Controllers/portfolioController");
const productController = require("./src/Controllers/productController");
const router = express.Router();


/////productController
router.get("/product", productController);
router.get("/prouct-list", productController);
router.get("/prouct-details", productController);
router.get("/prouct-date", productController);


/////portfolioController
router.get("/portfolio", portfolioController);
router.get("/portfolio-blogs", portfolioController);
router.get("/portfolio-game", portfolioController);
router.get("/portfolio-webchat", portfolioController);


/////messageController
router.get("/message", messageController);
router.get("/message-list", messageController);
router.get("/message-details", messageController);
router.get("/message-date", messageController);

/////commentController
router.get("/comment", commentController);
router.get("/comment-list", commentController);
router.get("/comment-details", commentController);
router.get("/comment-list", commentController);


/////blogController
router.get("/blog", blogController);
router.get("/blog-list", blogController);
router.get("/blog-site", blogController);
router.get("/blog-menu", blogController);

module.exports = router;
