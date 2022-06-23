const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A news must have a name"],
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
}, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
});

newsSchema.post(/^find/, function (docs, next) {
  console.log(`Query took ${Date.now() - this.start} milliseconds!`);
  next();
});

const News = mongoose.model("News", newsSchema);
module.exports = News;
