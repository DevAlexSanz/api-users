import { Router } from "express";
import { port } from "../Server/server.js";

import v1Routes from "../App/v1/main.js";

const router = Router();

router.use("/v1", v1Routes);
// /api route
router.get("/", async (request, response) => {
  response.status(200).json({
    message: "This is the /api route",
    v1: `Visit: http://localhost:${port}/api/v1`,
  });
});

export default router;
