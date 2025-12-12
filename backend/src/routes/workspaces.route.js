import { Router } from "express";
import {
  createNewWorkspace,
  fetchAllMyWorkspaces,
  fetchOneWorkspace,
} from "../controller/workspace.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

router.get("/:id", authMiddleware, fetchOneWorkspace);
router.post("/", authMiddleware, createNewWorkspace);
router.get("/", authMiddleware, fetchAllMyWorkspaces);

export default router;
