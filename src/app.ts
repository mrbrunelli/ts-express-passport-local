import { setupErrorHandler } from "./setup-error-handler";
import { setupExpressApp } from "./setup-express-app";
import { setupPassport } from "./setup-passport";
import { setupRoutes } from "./setup-routes";

const app = setupExpressApp();
setupPassport();
setupRoutes(app);
setupErrorHandler(app);

export default app;
