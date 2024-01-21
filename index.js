import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productoRoute from "./src/routes/productosRoute.js";
import usuarioRoute from "./src/routes/usuariosRoute.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.set("port", process.env.PORT || 4000);

app.use("/productos", productoRoute);
app.use("/usuarios", usuarioRoute);

app.use("*", (req, res) => {
  res.send("Esta ruta no existe en la API");
});

app.listen(app.get("port"), () => {
  console.log("Servidor corriendo en puerto", app.get("port"));
});
