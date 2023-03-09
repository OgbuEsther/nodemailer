import { Router } from "express";

import { registerUser } from "../controller/testController";
const userRoutes = Router();

userRoutes.post("/register", registerUser);

export default userRoutes;
