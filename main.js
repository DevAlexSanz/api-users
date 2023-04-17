"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _server = _interopRequireDefault(require("./Server/server.js"));
var _routes = _interopRequireDefault(require("./Routes/routes.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var startServer = (0, _server["default"])(_routes["default"]);
var _default = startServer;
exports["default"] = _default;