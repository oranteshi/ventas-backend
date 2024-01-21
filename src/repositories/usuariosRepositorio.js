import db from "../config/db.js";

export const conseguirUsuarioPorEmail = async (email) => {
  try {
    const query = "select * from usuarios where email = ?";
    const resultado = await db.execute(query, [email]);
    return resultado[0];
  } catch (err) {
    throw new Error(err);
  }
};

export const crearUsuario = async (email, password) => {
  try {
    const query = "insert into usuarios  (email, password) values (?,?)";
    await db.execute(query, [email, password]);
    return { email, password };
  } catch (err) {
    throw new Error(err);
  }
};
