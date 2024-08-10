import { Router } from "express";
import { getFacturas, createFacturas } from "../controllers/facturas.controller.js";

const router = Router();

router.get('/facturas', getFacturas)
router.post('/facturas', createFacturas)

export default router;