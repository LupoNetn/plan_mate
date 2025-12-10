import { Router } from "express";
import { createNewWorkspace,fetchAllMyWorkspaces } from "../controller/workspace.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router()

router.post('/', authMiddleware, createNewWorkspace)
router.get('/',authMiddleware,fetchAllMyWorkspaces)

export default router