import { createPool } from "mysql2/promise"; //librería mysql2
import {DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER} from './config.js'

//Conexión a la base de datos. creamos una constante pool la cual usaremos en el resto de la aplicación
export const pool = createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_DATABASE
})

