const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tboardSchema = mongoose.Schema(
  {
    number: {
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
    views: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Tboard = mongoose.model("Tboard", tboardSchema);

module.exports = { Tboard };
