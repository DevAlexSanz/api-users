"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _userControllerExample = require("./user.controller.example.js");
var router = (0, _express.Router)();
router.get("/", _userControllerExample.getAllUsers);
router.get("/:id", _userControllerExample.getUserById);
router.post("/", _userControllerExample.createUser);
router.put("/:id", _userControllerExample.updateUser);
router["delete"]("/:id", _userControllerExample.deleteUser);
var _default = router;
exports["default"] = _default;