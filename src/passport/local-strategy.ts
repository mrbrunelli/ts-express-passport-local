import { IStrategyOptions, Strategy } from "passport-local";
import { prisma } from "../database/prisma";

const strategyOptions: IStrategyOptions = {
  usernameField: "username",
  passwordField: "password",
};

export const localStrategy = new Strategy(
  strategyOptions,
  async (username, password, done) => {
    try {
      const user = await prisma.user.findUnique({
        where: {
          username,
          password,
        },
      });

      if (!user) {
        return done(null, false, { message: "invalid credentials" });
      }

      return done(null, user, { message: "logged in successfully" });
    } catch (e) {
      return done(e);
    }
  }
);
