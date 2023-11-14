import { Router } from "express";
import { create, read, readAll } from "../controller/commitContoller";

export const router: Router = Router();

router.route("/create").post(create)
router.route("/readAll").get(readAll)
router.route("readOne").get(read)

export default router;