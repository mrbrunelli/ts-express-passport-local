import { Express } from "express";
import { jwtAuthenticate } from "./passport/jwt-authenticate";
import auth from "./routes/auth";
import signup from "./routes/signup";
import user from "./routes/user";

export function setupRoutes(app: Express): void {
  app.use("/signup", signup);
  app.use("/auth", auth);
  app.use("/user", jwtAuthenticate, user);
}
