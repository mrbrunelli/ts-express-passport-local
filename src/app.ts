import { setupExpressApp } from "./setup-express-app";
import { setupPassport } from "./setup-passport";
import { setupRoutes } from "./setup-routes";

const app = setupExpressApp();
setupPassport();
setupRoutes(app);

export default app;
