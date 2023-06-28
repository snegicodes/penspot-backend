import express from "express";
import postRoutes from "./routes/posts.js";
import authRoutes from "./routes/auths.js";
import userRoutes from "./routes/users.js";
import cors from "cors";
import * as dotenv from "dotenv";
import { db } from "./db.js";
import cookieParser from "cookie-parser";
import multer from "multer";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../PenSpot-Frontend/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

app.post("/api/upload", upload.single("file"), function (req, res) {
  const file = req.file;
  console.log("File->", file);
  res.status(200).json(file.filename);
});

app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.get("/test", (req, res) => {
  res.json("It Works");
});

app.post("/put", (req, res) => {
  const q =
    "INSERT INTO users (`id`, `username`, `email`, `password`, `img`) VALUES (?)";
  const values = [req.body.id];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Book has been created successfully");
  });
});

app.listen(8800, () => {
  console.log("Connected on port 8800!");
});
