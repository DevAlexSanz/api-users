import { Router } from "express";
import { port } from "../../Server/server.js";
import userRoutes from "./Users/user.routes.example.js";

const router = Router();

router.use("/users", userRoutes);

router.get("/", (request, response) => {
  response.status(200).json({
    message: "Welcome to /v1 route",
    Users: `Users (CRUD and more): http://localhost:${port}/api/v1/users`,
  });
});

export default router;
