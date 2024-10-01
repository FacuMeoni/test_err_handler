import { Router } from "express";
import { registerUser } from "../controllers/user_controllers.js";
import { tryCatch } from "../utils/try_catch.js";
const router = Router();

router.post('/register', tryCatch(registerUser));

export default router;