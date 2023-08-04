import { ExtractJwt, Strategy, StrategyOptions } from "passport-jwt";
import { prisma } from "../database/prisma";

const strategyOptions: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

export const jwtStrategy = new Strategy(
  strategyOptions,
  async (jwtPayload, done) => {
    try {
      const user = await prisma.user.findUnique({
        where: {
          id: jwtPayload.id,
        },
      });

      if (!user) {
        return done(null, false);
      }

      const expressUserContext = {
        id: user.id,
        name: user.name,
        email: user.email,
        username: user.username,
      };

      return done(null, expressUserContext);
    } catch (e) {
      return done(e);
    }
  }
);
