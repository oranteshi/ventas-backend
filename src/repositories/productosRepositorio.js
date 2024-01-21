import db from "../config/db.js";

export const conseguirProductos = async () => {
  try {
    const query = "select * from productos";
    const resultado = await db.execute(query);
    return resultado[0];
  } catch (err) {
    throw new Error(err);
  }
};

export const crearProducto = async (nombre, precio, descuento, idUsuario) => {
  try {
    const query =
      "insert into productos (nombre, precio, descuento, idUsuario) values (?,?,?,?)";
    await db.execute(query, [nombre, precio, descuento, idUsuario]);
    return {
      nombre,
      precio,
      descuento,
      idUsuario,
    };
  } catch (err) {
    throw new Error(err);
  }
};
