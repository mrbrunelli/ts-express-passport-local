import { Router } from "express";
import jwt from "jsonwebtoken";
import passport from "passport";

const router = Router();

router.post("/login/password", (req, res) => {
  passport.authenticate(
    "local",
    { session: false },
    (error: any, user: any, info: any) => {
      if (error || !user) {
        return res.status(400).json({
          message: "something is wrong",
          user,
        });
      }

      req.login(user, { session: false }, (error) => {
        if (error) {
          res.send(error);
        }

        const token = jwt.sign(user, String(process.env.JWT_SECRET));
        return res.json({ user, token });
      });
    }
  )(req, res);
});

export default router;
