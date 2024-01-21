import * as productoServicio from "../services/productosServicio.js";

export const conseguirProductoControlador = async (req, res) => {
  try {
    const resultado = await productoServicio.conseguirProductos();
    res.status(200).json(resultado);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export const crearProductoControlador = async (req, res) => {
  try {
    const resultado = await productoServicio.crearProducto(req.body);
    res.status(201).json(resultado);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
