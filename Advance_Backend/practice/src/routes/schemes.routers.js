import { Router } from "express";
import { addSchemes, getAllScheme } from "../controllers/schemes.controller.js";
const router = Router();

router.route("/add-schemes").post(addSchemes);
router.route("/get-all-schemes").get(getAllScheme);
export default router;
