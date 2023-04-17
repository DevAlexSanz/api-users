"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _server = require("../../Server/server.js");
var _userRoutesExample = _interopRequireDefault(require("./Users/user.routes.example.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = (0, _express.Router)();
router.use("/users", _userRoutesExample["default"]);
router.get("/", function (request, response) {
  response.status(200).json({
    message: "Welcome to /v1 route",
    Users: "Users (CRUD and more): http://localhost:".concat(_server.port, "/api/v1/users")
  });
});
var _default = router;
exports["default"] = _default;