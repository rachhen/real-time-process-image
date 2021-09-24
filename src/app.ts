import express from "express";
import dotenv from "dotenv";
import { join } from "path";

// Load env variables
dotenv.config();

import imageHandler from "./handlers/image-handler";

const app = express();
app.disable("x-powered-by");
app.use(express.static(join(__dirname, "..", "public")));
app.use("/images", imageHandler);

app.listen(3000, () => {
  console.log("Server starting at http://localhost:3000");
});
