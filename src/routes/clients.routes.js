import { Router } from "express";
import { getClients, createClient } from "../controllers/clients.controller.js";

const router = Router();

router.get('/clients', getClients)
router.post('/clients', createClient)

export default router