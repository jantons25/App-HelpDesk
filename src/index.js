import app from './app.js';
import {connectDB} from './db.js';

connectDB();

const PUERTO = 4000;

app.listen(PUERTO, () => {
  console.log(`El servidor esta escuchando en el puerto: ${PUERTO}`);
});