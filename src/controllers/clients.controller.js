import { pool } from "../db.js";

//Controladores de Clientes. En esta sección va la lógica de los servicios

//Este enpoint se utilizará en la vista de Facturas y se podrá usar en forma de buscador de clientes
export const getClients = async (req, res) => {
  try {
    const { id } = req.query;
    if (!id) {
      return res.status(400).json({ message: "El id es requerido" });
    }
    const query = "SELECT * FROM cliente WHERE id LIKE ?";
    const clientes = await pool.query(query, [`${id}%`]);
    res.json(clientes[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Error del servidor",
    });
  }
};

export const createClient = async (req, res) => {
  try {
    const { nombre, tipoId, id, observaciones } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO cliente (nombre, tipoId, id, observaciones) VALUES (?, ?, ?, ?)",
      [nombre, tipoId, id, observaciones]
    );
    res.status(201).send({
      message: "Cliente creado exitosamente",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error del servidor",
    });
  }
};
