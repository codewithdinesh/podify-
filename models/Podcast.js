const mongoose = require("mongoose");

const podcastSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    fileUrl: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

const Podcast = mongoose.model("Podcast", podcastSchema);

module.exports = Podcast;
