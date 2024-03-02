import { Router } from "express";
import { firstControler } from "./app/controllers/FirstControler";

const router:Router = Router();
router.get('/', firstControler.home)
export { router }