import express from "express";
import * as bookcontroller from "../route/bookcontroller.js";
const router = express.Router();


router.get("/", bookcontroller.getAllBooks);

export default router;