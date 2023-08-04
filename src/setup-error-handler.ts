import { Express, NextFunction, Request, Response } from "express";

function errorHandler(
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const e: any = {
    timestamp: new Date().toISOString(),
    path: req.path,
    status: error?.status || 500,
    message: error.message,
  };

  if (process.env.NODE_ENV === "development") {
    e.stack = error.stack;
  }

  return res.status(e.status).json(e);
}

export function setupErrorHandler(app: Express): void {
  app.use(errorHandler);
}
