import express from "express";
import { newTask, getMyTask, UpdateTask, DeleteTask } from "../controllers/task.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();


router.post("/new",isAuthenticated,newTask);
router.get("/my",isAuthenticated,getMyTask);

router.route("/:id").put(isAuthenticated,UpdateTask).delete(isAuthenticated,DeleteTask)


export default router;