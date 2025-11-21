const mongoose = require("mongoose");

const confessionSchema = new mongoose.Schema({
    message: String,
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Confession", confessionSchema);
