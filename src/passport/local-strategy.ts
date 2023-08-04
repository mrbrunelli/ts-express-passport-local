import { IStrategyOptions, Strategy } from "passport-local";
import { compare } from "../bcrypt/compare";
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
        },
      });

      if (!user) {
        return done(null, false, { message: "invalid credentials" });
      }

      const isEqual = await compare(password, user.password);

      if (!isEqual) {
        return done(null, false, { message: "invalid credentials" });
      }

      const expressUserContext = {
        id: user.id,
        name: user.name,
        email: user.email,
        username: user.username,
      };

      return done(null, expressUserContext, {
        message: "logged in successfully",
      });
    } catch (e) {
      return done(e);
    }
  }
);
