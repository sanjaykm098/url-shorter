import express from "express";
import { handleLongUrl, handleShortUrl } from "../controllers/url.js";
const router = express.Router();

router.post("/", handleLongUrl);
router.get("/:shortId", handleShortUrl);

export { router };
