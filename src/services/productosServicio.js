import * as productoRepositorio from "../repositories/productosRepositorio.js";

export const conseguirProductos = async () => {
  try {
    const resultado = await productoRepositorio.conseguirProductos();
    return resultado;
  } catch (err) {
    throw new Error();
  }
};

export const crearProducto = async (producto) => {
  try {
    const { nombre, precio, descuento, idUsuario } = producto;
    const resultado = await productoRepositorio.crearProducto(
      nombre,
      precio,
      descuento,
      idUsuario
    );
    return resultado;
  } catch (err) {
    throw new Error(err);
  }
};
