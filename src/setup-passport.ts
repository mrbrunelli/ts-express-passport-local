import passport from "passport";
import { jwtStrategy } from "./passport/jwt-strategy";
import { localStrategy } from "./passport/local-strategy";

export function setupPassport(): void {
  passport.use(localStrategy);
  passport.use(jwtStrategy);
}
