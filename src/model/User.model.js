import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String
    }
  email: {
    type: String,
    required: true,
    validate: {
      validator: async function (email) {
        // Check email format
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

        if (!isValidEmail) return false;

        // Check if email already exists
        const existingUser = await mongoose.models.User.findOne({
          email,
          _id: { $ne: this._id }, // Ignore current document during update
        });

        return !existingUser;
      },
      message: "Email is invalid or already exists",
    },
  },

  role: {
    type: String,
    enum: ["buyer", "admin"],
    default: "buyer",
  },
  
},{
    timestamps:true
});