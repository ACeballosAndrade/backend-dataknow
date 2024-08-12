import app from './app.js'
import {PORT} from './config.js'


//Este es el punto de entrada de nuestra api. Se encarga de llamar a app
app.listen(PORT, () => console.log(`server in port http://localhost:${PORT}`))
