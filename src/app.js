//LIBRERIAS-FRAMEWORK-MIDDLEWARE
//framework para el servidor http
import express from 'express';
//permite visualizar las peticiones que llegan al backend
import morgan from 'morgan';
//permite manejar las cookies generadas para los usuarios
import cookieParser from 'cookie-parser';
//ayuda a indicar que puertos se pueden comunicar
import cors from 'cors';

//IMPORTANCION DE ARCHIVOS
import authRoutes from './routers/auth.routes.js';
import tasksRoutes from './routers/tasks.routes.js';

//el metodo use permite manejar y utilizar middleware
const app = express();
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use('/api', authRoutes);
app.use('/api', tasksRoutes);

export default app;