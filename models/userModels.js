const { model, Schema } = require("mongoose");

const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar:{
      type:String,
    }
  },
  {
    timestamps: true,
  }
);

const UserModel = model("users", schema);

module.exports = UserModel;
