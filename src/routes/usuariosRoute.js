import { Router } from "express";
import * as usuarioController from "../controllers/usuarioController.js"

const usuarioRoute = Router()

usuarioRoute.post("/", usuarioController.crearUsuarioController)

export default usuarioRoute;