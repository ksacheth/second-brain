import mongoose from "mongoose";
import { MONGODB_URL } from "./config.js";

mongoose.connect(MONGODB_URL);

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
  name: String,
  // email: {type: String , required: true, unique: true},
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const contentSchema = new Schema({
  userId: { type: ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  link: String,
  tags: [{ type: ObjectId, ref: "Tag" }],
  type: [{ type: String }],
});

const linkSchema = new Schema({
  hash: { type: String, required: true },
  userId: { type: ObjectId, ref: "User", required: true },
});

const tagsSchema = new Schema({
  title: { type: String, required: true },
  userId: { type: ObjectId, ref: "User", required: true },
});

export const UserModel = mongoose.model("User", User);
export const ContentModel = mongoose.model("content", contentSchema);
export const LinkModel = mongoose.model("link", linkSchema);
export const TagsModel = mongoose.model("tags", tagsSchema);
