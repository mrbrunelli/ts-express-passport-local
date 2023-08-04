import express, { Express } from "express";
import logger from "morgan";

export function setupExpressApp(): Express {
  const app = express();

  app.use(express.json());
  app.use(logger("dev"));

  return app;
}
