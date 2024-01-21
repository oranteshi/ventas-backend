import { Router } from "express";
import * as productoControlador from "../controllers/productosController.js";

const productoRoute = Router();

productoRoute
  .get("/", productoControlador.conseguirProductoControlador)
  .post("/", productoControlador.crearProductoControlador);

export default productoRoute;
