import * as usuariosRepositorio from "../repositories/usuariosRepositorio.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

export const crearUsuario = async (usuario) => {
  try {
    const saltosBcrypt = parseInt(process.env.SALTOS_BCRYPT) || 5;
    const { email, password } = usuario;
    const usuarioExistente = await usuariosRepositorio.conseguirUsuarioPorEmail(
      email
    );
    if (usuarioExistente.length) {
      throw new Error("Email existente");
    }
    const passwordHash = bcrypt.hashSync(password, saltosBcrypt);
    const response = await usuariosRepositorio.crearUsuario(
      email,
      passwordHash
    );
    return response;
  } catch (err) {
    throw new Error(err);
  }
};
