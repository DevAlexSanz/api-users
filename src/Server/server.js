import express from "express";
import morgan from "morgan";
import cors from "cors";
import initializeDB from "../Database/database.js";

import "../Config/config.js";

const app = express();
export const port = process.env.PORT || 3000;

// This function initialize the server
const initializeServer = async (apiRoutes) => {
  // Initialize Database
  await initializeDB();

  try {
    app.set(port);

    // Middlewares
    app.use(express.json());
    app.use(cors());
    app.use(morgan("dev"));

    // Listen Server
    app.listen(port, () => {
      console.log(
        "===============================================\n" +
          `Server listening on port: http://localhost:${port}\n` +
          "==============================================="
      );
    });

    // Routes
    app.use("/api", apiRoutes);

    app.get("/", (request, response) => {
      response.status(200).json({
        message: "Welcome to rest api ToDo's",
        api: `Visit: http://localhost:${port}/api`,
      });
    });
  } catch (err) {
    console.log(err);

    response.status(500).json({
      message: "Internal Server Error",
      code: 500,
    });
  }
};

export default initializeServer;
