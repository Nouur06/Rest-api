const mongoose = require("mongoose");

// Define the fields stored for each user and require a unique email address.
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    age: { type: Number, min: 0 },
  },
  { timestamps: true },
);

module.exports = mongoose.model("User", userSchema);
