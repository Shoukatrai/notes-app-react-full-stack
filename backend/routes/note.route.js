import express from "express";
import { verifyToken } from "../utils.js/verifyUser.js";
import {
  addNote,
  deleteNote,
  editNote,
  getAllNotes,
  updateNotePinned,
} from "../controller/note.controller.js";

const router = express.Router();

router.post("/add", verifyToken, addNote);
router.post("/edit/:noteId", verifyToken, editNote);
router.get("/all", verifyToken, getAllNotes);
router.delete("/delete/:noteId", verifyToken, deleteNote);
router.put("/update-note-pinned/:noteId", verifyToken, updateNotePinned);

export default router;
