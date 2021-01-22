const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PentacleSchema = mongoose.Schema(
  {
    writer: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      maxlength: 50,
    },
    description: {
      type: String,
    },
    images: {
      type: Array,
      default: [],
    },
    continents: {
      type: Number,
      default: 1,
    },
    comment: {
      type: String,
    },
    views: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Pentacle = mongoose.model("Pentacle", PentacleSchema);

module.exports = { Pentacle };
