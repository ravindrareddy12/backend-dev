const mongoose = require('mongoose');

const { Schema } = mongoose;


const insightSchema = new Schema({
    domain: {
      type: String,
      required: true,
    },
    wordCount: {
      type: Number,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      default: false,
    },
  });

  const Insight = mongoose.model('Insight', insightSchema);

  module.exports = Insight;
