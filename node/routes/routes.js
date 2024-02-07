import express from "express";
import { getAllHoteles, getHotel } from "../controllers/Controller.js";

const router = express.Router()

router.get('/', getAllHoteles)
router.get('/:id', getHotel)

export default router
