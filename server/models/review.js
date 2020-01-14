const mongoose = require("mongoose");
const ReviewSchema = new mongoose.Schema(
  {
    rating: {
      type: Number,
      required: [true, "A rating is required for this review"]
    },
    comment: {
      type: String,
      default: ""
    }
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);
mongoose.model("Review", ReviewSchema);
module.exports = ReviewSchema;
