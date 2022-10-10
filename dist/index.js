"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./classes/server"));
const router_1 = require("./routes/router");
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
//const nombre = "Kelly Paulina Narváez Castillo.";
//console.log(`Mi nombre es ${nombre}`);
const server = new server_1.default();
//BodyParser
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use(body_parser_1.default.json());
//CORS
server.app.use((0, cors_1.default)({ origin: true, credentials: true }));
//Rutas de servicios
server.app.use('/', router_1.router);
server.start(() => {
    console.log(`Servidor corriendo en el puerto ${server.port}`);
});
