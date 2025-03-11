import express from "express";
import { createForm, deleteForm, getForms, updateForm, uploadFile } from "../controllers/form.controllers.js";
import upload from "../middleware/multer.middleware.js";

const router = express.Router();

router.post("/forms", createForm);
router.get("/forms", getForms);
router.put("/forms/:id", updateForm);
router.delete("/forms/:id", deleteForm);
router.post("/forms/upload", upload.single("resume"), uploadFile);

export default router;
