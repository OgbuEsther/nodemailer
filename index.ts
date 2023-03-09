import express, { Application } from "express";
require("./config/db");
import cors from "cors";
const PORT: number = 8888;

const app: Application = express();
app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`server is up on port ${PORT}`);
});
