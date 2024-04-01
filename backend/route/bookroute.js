import express from "express";
import * as bookcontroller from "./bookcontroller.js";
const router = express.Router();

router.get("/", bookcontroller.getAllBooks);

export default router;