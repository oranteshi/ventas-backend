import * as usuarioService from "../services/usuarioService.js";

export const crearUsuarioController = async (req, res) => {
  try {
    const respuesta = await usuarioService.crearUsuario(req.body);
    res.status(201).json(respuesta);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
