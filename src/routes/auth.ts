import { Router } from "express";
import jwt from "jsonwebtoken";
import passport from "passport";
import { HttpError } from "../errors/http-error";

const router = Router();

router.post("/login/password", (req, res, next) => {
  passport.authenticate(
    "local",
    { session: false },
    (error: any, user: any, info: any) => {
      try {
        if (error || !user) {
          throw HttpError.unauthorized(info.message);
        }

        req.login(user, { session: false }, (error) => {
          if (error) {
            throw HttpError.unauthorized();
          }

          const token = jwt.sign(user, String(process.env.JWT_SECRET));
          return res.json({ user, token });
        });
      } catch (e) {
        next(e);
      }
    }
  )(req, res);
});

export default router;
