import { NextFunction, Request, Response } from "express";
import passport from "passport";
import { HttpError } from "../errors/http-error";

export function jwtAuthenticate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  passport.authenticate(
    "jwt",
    { session: false },
    (error: any, user: any, info: any) => {
      if (error || !user) {
        throw HttpError.unauthorized(info.message);
      }

      req.user = user;

      next();
    }
  )(req, res, next);
}
