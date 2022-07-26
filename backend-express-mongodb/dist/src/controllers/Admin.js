"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTweet = exports.updateTweet = exports.postTweet = exports.getTweet = exports.getTweets = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Twitter_1 = __importDefault(require("../models/Twitter"));
const getTweets = (req, res) => {
    Twitter_1.default.find((err, data) => {
        console.log(err, data);
        res.json(data);
        if (err)
            console.log(err);
    });
};
exports.getTweets = getTweets;
const getTweet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tweetId = req.params.tweetId;
    console.log("Tweet ID", tweetId);
    // This line of code fixes the CastError: Cast to ObjectId failed for value "favicon.ico" (type string) at path "_id" for model "contents"
    if (!mongoose_1.default.Types.ObjectId.isValid(tweetId))
        return false;
    yield Twitter_1.default.findById(tweetId).exec();
    Twitter_1.default.findById(tweetId, (err, tweet) => {
        console.log(tweet);
        res.json(tweet);
        if (err) {
            console.log(err);
        }
    });
});
exports.getTweet = getTweet;
const postTweet = (req, res) => {
    const { tweet, img } = req.body;
    const twitter = new Twitter_1.default({ tweet: tweet, img: img });
    twitter.save();
    console.log("Tweet Created");
    res.status(201).json({ msg: "Tweet Created" });
};
exports.postTweet = postTweet;
const updateTweet = (req, res) => {
    const tweetId = req.params.tweetId;
    const { tweet, img } = req.body;
    Twitter_1.default.findByIdAndUpdate(tweetId, { tweet: tweet, img: img }).then(() => {
        console.log(`Tweet ${tweetId} Updated`);
        res.json({ msg: `Tweet ${tweetId} Updated` });
    });
};
exports.updateTweet = updateTweet;
const deleteTweet = (req, res) => {
    const tweetId = req.body.tweetId;
    Twitter_1.default.findByIdAndRemove(tweetId, () => {
        res.json({ msg: `Tweet ${tweetId} Deleted` });
    });
};
exports.deleteTweet = deleteTweet;
