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
    weblinks:{
      type: String,
      required: true
    },
    medialinks:{
      type : String,
      required: true
    }
  });

  const Insight = mongoose.model('Insight', insightSchema);

  module.exports = Insight;
