import { Router } from "express";

const router = Router();

router.get("/profile", (req, res) => {
  return res.json(req.user);
});

export default router;
