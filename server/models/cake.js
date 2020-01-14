const mongoose = require("mongoose");
const ReviewSchema = require(__dirname + "/review");

const CakeSchema = new mongoose.Schema(
  {
    baker_name: {
      type: String,
      required: [true, "Baker's name is required"],
      minlength: [2, "Baker's name has a minimum length of 2 characters"]
    },
    image: {
      type: String,
      required: [true, "Image URL is required"]
    },
    reviews: [ReviewSchema]
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

mongoose.model("Cake", CakeSchema);

