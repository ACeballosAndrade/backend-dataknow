import { pool } from "../db.js";

//Controladores de Facturas. En esta sección va la lógica de los servicios
//Ejemplo de url: GET http://localhost:3000/facturas?startDate=2024-01-01&endDate=2024-12-31&page=1&limit=10

export const getFacturas = async (req, res) => {
  try {
    // Parámetros de paginación y fechas
    const { page = 1, limit = 10, startDate, endDate } = req.query;

    //Calculando el offset de desplazamiento
    const offset = (page - 1) * limit;

    //Consulta SQL
    const query = `SELECT
                        factura.nombreProducto,
                        factura.fecha,
                        factura.precio,
                        factura.valorDescuento,
                        factura.total,
                        cliente.id AS idCliente,
                        cliente.nombre
                        FROM factura JOIN cliente ON factura.idCliente = cliente.id WHERE factura.fecha BETWEEN ? AND ?
                        LIMIT ? OFFSET ?;`;

    const facturas = await pool.query(query, [
      startDate,
      endDate,
      parseInt(limit),
      parseInt(offset),
    ]);

    // Consulta para obtener el número total de facturas en el rango de fechas
    const totalQuery = `
    SELECT COUNT(*) AS total 
    FROM Factura 
    WHERE fecha BETWEEN ? AND ?;
`;
    const totalResult = await pool.query(totalQuery, [startDate, endDate]);
    const total = totalResult[0].total;

    if (facturas.length === 0) {
      return res.status(404).json({
        message:
          "No se encontraron facturas en el rango de fechas proporcionado",
      });
    }

    //Este response nos devolverá el arreglo con todas las facturas segun las condiciones, el total de facturas, la página actual y el total de pags
    res.json({
      facturas,
      total,
      page: parseInt(page),
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error del servidor",
    });
  }
};

export const createFacturas = async (req, res) => {
  try {
    const {
      idCliente,
      fecha,
      nombreProducto,
      precio,
      valorDescuento,
      iva,
      total,
    } = req.body;
    const resp = await pool.query(
      "INSERT INTO factura (idCliente, fecha, nombreProducto, precio, valorDescuento, iva, total) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [idCliente, fecha, nombreProducto, precio, valorDescuento, iva, total]
    );
    res.status(210).json({ message: "Factura creada exitosamente" });
  } catch (error) {
    return res.status(500).json({
      message: "Error del servidor",
    });
  }
};
