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
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173'); // allow all origins, you can restrict to specific domains
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // allow specific HTTP methods
  res.header('Access-Control-Allow-Headers', 'Content-Type'); // allow specific headers
  next();
});

app.use(
  morgan('dev', {
    stream: { write: (message) => logger.info(message.trim()) },
  })
);
app.use(express.json());

app.use('/aduan', aduanRouter);

const port = process.env.PORT;
//const port = 3000
//setup CORS


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