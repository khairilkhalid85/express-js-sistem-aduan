import express from 'express'
import aduanRouter from './router/aduan.router'
import dotenv from 'dotenv'
import morgan from 'morgan'
import logger from './utils/logger';
import db from './database/db';

dotenv.config();

// check database connection on startup
db.raw('SELECT 1')
  .then(() => {
    console.log('Database connection established');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
    process.exit(1); // Exit with failure code
  });

const app = express();
app.use(
    morgan('dev', {
      stream: { write: (message) => logger.info(message.trim()) },
    })
  );
app.use(express.json());

app.use('/aduan', aduanRouter);

const port = process.env.PORT;
//const port = 3000


app.get('/', (req, res) => {
    res.send('Hello khai!')
})


app.get('/test-endpoint', (req, res) => {
    res.json({
        message: "Aduan berjaya direkodkan",
        "nama": "khai",
        "emel": "khai@mail.com",
        "telefon": "0123456789"
    })
})

// app.use('/aduan', aduanRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


export default app;