import express from "express";
import logger from "morgan";
import passport from "passport";
import { jwtStrategy } from "./passport/jwt-strategy";
import { localStrategy } from "./passport/local-strategy";
import auth from "./routes/auth";
import signup from "./routes/signup";
import user from "./routes/user";

passport.use(localStrategy);
passport.use(jwtStrategy);

const app = express();

app.use(express.json());
app.use(logger("dev"));

app.use("/signup", signup);
app.use("/auth", auth);
app.use("/user", passport.authenticate("jwt", { session: false }), user);

export default app;
