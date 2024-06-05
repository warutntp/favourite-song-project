import { Router } from "express";
import {
  createUserController,
  updateUserController,
  deleteUserController,
  getUserController,
} from "./user.controller";

const router = Router();

router.post("/users", createUserController);
router.patch("/users/:userId", updateUserController);
router.delete("/users/:userId", deleteUserController);
router.get("/users/:userId", getUserController);

export default router;
