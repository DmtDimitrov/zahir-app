import express from 'express';

import { PORT } from './constants/index.js';
import { databaseConfig } from './config/database.js';
import { expressConfig } from './config/express.js';
import routes from './routes/index.js';

const app = express();

expressConfig(app);

app.get('/', (req, res) => {
    res.json({ text: 'Server is working' })
});

app.use(routes);

databaseConfig()
    .then(() => {
        console.log('Database connected');
        app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}/`));
    })
    .catch((err) => {
        console.log('Database is not connected:', err);
    });
