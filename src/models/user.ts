import { Schema, Types, Model, model } from "mongoose";
import { User } from "../interfaces/user.interface";


const UserSchema = new Schema<User>(
  {
    googleId:{
        type: String,
        required: true,
        unique: true,
        _id: true
    },
    givenName:{
        type: String,
        required: true
    },
    familyName:{
        type: String,
        required: true,

    },
    email:{
        type: String,
        required: true,

    },
    imageUrl:{
        type: String,
        required: true,
        unique: true
    },
    authStatus:{
      type: Boolean,
      requiered: true,
      default: false
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
);


const UserModel = model('users',UserSchema)

export default UserModel;