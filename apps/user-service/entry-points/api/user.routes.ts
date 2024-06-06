import { Router } from "express";
import {
  createUserController,
  updateUserController,
  deleteUserController,
  getUserController,
  getUsersController,
} from "./user.controller";

const router = Router();

router.post("/users", createUserController);
router.patch("/users/:userId", updateUserController);
router.delete("/users/:userId", deleteUserController);
router.get("/users/:userId", getUserController);
router.get("/users", getUsersController);

export default router;
