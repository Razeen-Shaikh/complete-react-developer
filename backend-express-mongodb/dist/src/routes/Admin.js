"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Admin_1 = require("../controllers/Admin");
const router = express_1.default.Router();
router.get("/", Admin_1.getTweets);
router.get("/:tweetId", Admin_1.getTweet);
router.post("/delete", Admin_1.deleteTweet);
router.post("/tweet", Admin_1.postTweet);
router.post("/:tweetId", Admin_1.updateTweet);
exports.default = router;
