import { Router } from "express";
import { createEntry, listEntries, updateEntry, deleteEntry } from "../controllers/entries.controller.js";
import { validate } from "../middleware/validate.js";
import { createEntrySchema } from "../validations/entry.schema.js";

const router = Router();

router.post("/", validate(createEntrySchema), createEntry);
router.get("/", listEntries);
router.put("/:id", validate(createEntrySchema),updateEntry);
router.delete("/:id", deleteEntry);

export default router;