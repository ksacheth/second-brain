import express from "express";
import { ContentModel, UserModel } from "./db.js";
import jwt from "jsonwebtoken";
import { JWT_PASSWORD } from "./config.js";
import { userMiddleware } from "./middleware.js";
import bcrypt from "bcryptjs";

const app = express();

app.use(express.json());

app.post("/api/v1/signup", async (req, res) => {
  // zod validation
  const username = req.body.username;
  const password = req.body.password;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await UserModel.create({
      username: username,
      password: hashedPassword,
    });
    res.status(200).json({
      message: "user created",
    });
  } catch (e) {
    res.status(411).send(e);
  }
});

app.post("/api/v1/signin", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const existingUser = await UserModel.findOne({
    username,
  });
  const passwordMatch = await bcrypt.compare(password, existingUser.password);
  if (existingUser && passwordMatch) {
    const token = jwt.sign(
      {
        id: existingUser._id,
      },
      JWT_PASSWORD
    );

    res.json({
      token,
    });
  } else {
    res.status(403).json({
      message: "Invalid credentials exist",
    });
  }
});

app.post("/api/v1/content", userMiddleware, async (req, res) => {
  const link = req.body.link;
  const type = req.body.body;
  const title = req.body.title;

  await ContentModel.create({
    title,
    link,
    type,
    userId: req.userId,
    tags: [],
  });

  res.json({
    message: "Content added",
  });
});

app.get("/api/v1/content", userMiddleware, async (req, res) => {
  const userId = req.userId;
  const content = await ContentModel.find({
    userId: userId,
  }).populate("userId", "username");
  res.json({
    content,
  });
});

app.delete("/api/v1/content", userMiddleware, async (req, res) => {
  const contenId = req.body.contenId;

  await ContentModel.deleteMany({
    contenId,
    userId: req.userId,
  });

  res.json({
    message: "Deleted",
  });
});

app.post("/api/v1/share", (req, res) => {});

app.listen(3000);
