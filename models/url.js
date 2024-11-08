import mongoose from "mongoose";

const urlSchema = new mongoose.Schema(
  {
    shortId: {
      unique: true,
      type: String,
      required: true,
    },
    redirectUrl: {
      required: true,
      type: String,
    },
    totalClicks: {
      required: false,
      type: Number,
    },
  },
  { timestamps: true }
);

const URL = mongoose.model("url", urlSchema);

export { URL };
