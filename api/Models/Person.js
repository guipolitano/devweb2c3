const mongoose = require("mongoose");

const PersonSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    latitude: {
      type: String,
      required: true,
    },
    longitude: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      required: true,
      default: true,
    },
    deletedAt: {
      type: Date,
    },
  },
  { timestamps: true }
);

module.exports = PersonSchema;
