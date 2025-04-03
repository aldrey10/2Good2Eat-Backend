import express from 'express';
import cors from 'cors';
import { PORT } from './config.js';

dotenv.config();
//Opciones de CORS. Actualmente permitiremos cualquier origen, método y encabezados.
// const corsOptions = {
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     credentials: true,
// };

const app = express();
app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
    console.log('Server is running on port 8080');
});

app.get('/users/:id', async (req, res) => {
    console.log("holapepe")
    const user = await getUserById(req.params.id);
    res.status(200).send(user);
});