import initializeServer from "./Server/server.js";
import apiRoutes from "./Routes/routes.js";

const startServer = initializeServer(apiRoutes);

export default startServer;
