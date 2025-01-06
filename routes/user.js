import express from "express";
import { postUser,getUsers,getUserByID } from "../controllers/user.js";
const router = express.Router();

router.post("/post/users",postUser)
router.get("/get/users",getUsers)
router.get("/get/user/:id",getUserByID)

export default router
