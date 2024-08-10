import express from 'express'

import clientsRoutes from './routes/clients.routes.js'
import facturasRoutes from './routes/facturas.routes.js'
import indexRoutes from './routes/index.routes.js'
//Importamos la constante del puerto seteada en config.js
import { PORT } from './config.js'

const app = express();

//Para que mi aplicación entienda los JSON que le envio en el body de los POST
app.use(express.json())

//Rutas traídas desde routes, haciendo uso del recurso Router de Express
app.use(clientsRoutes)
app.use(facturasRoutes)
app.use(indexRoutes)

//Mensaje genérico por si el usuario se equivoca de ruta. Enviando un 404
app.use((req, res, next) => {
    res.status(404).json({
        message: '404 Ruta no encontrada'
    })
}) 

export default app