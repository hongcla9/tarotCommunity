const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = mongoose.Schema(
  {
    writer_Id: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    tboard_Id: {
      type: Schema.Types.ObjectId,
      ref: "Tboard",
    },
    comment: {
      type: String,
    },
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comment", CommentSchema);

module.exports = { Comment };
