import { Router } from "express";
import { localAuthenticate } from "../passport/local-authenticate";

const router = Router();

router.post("/login/password", localAuthenticate);

export default router;
