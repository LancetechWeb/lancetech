import { UserSignUpDTO, User } from 'authentication/types';
import mongoose, { type Document } from 'mongoose';

// Create the UserDoc type alias
export type UserDoc = Document & User;


const UserSchema = new mongoose.Schema(
  {
    firstName:{
      type: String,
      required:true,
    },
    lastName:{
      type: String,
      required:true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default:true
    },
    rank:{
      type: String
    },
    authorities: [
      {
        type: String
      },
    ],  
  },
  {
    timestamps: true, // Enable createdAt and updatedAt timestamps
  }
);

export const UserSchemaModel = mongoose.model<UserDoc>('lancetech.users', UserSchema);

// wrapper function to enforce strict typing
export const createUserWrapper = (attrs: UserSignUpDTO) => {
  console.log("in signUp schema model")


  return new UserSchemaModel(attrs);
};
