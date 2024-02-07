import express from 'express';
import cors from 'cors'

import db from './database/db.js';

import hotelRoutes from './routes/routes.js';

const app = express()

app.use(cors())
app.use(express.json())
app.use('/hoteles', hotelRoutes)

try {
    await db.authenticate()
    console.log('conexion exitosa a la base de datos');
} catch (error) {
    console.log(`El error de conexion es: ${error}`);
}

app.get('/', (req, res) => {
    res.send('hola mundo')
})

app.listen(8000, () => {
    console.log('server up running in http://localhost:8000/')
})
