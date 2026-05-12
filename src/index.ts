import express from 'express'
import aduanRouter from './router/aduan.router'
import dotenv from 'dotenv'
import morgan from 'morgan'
import logger from './utils/logger';


dotenv.config();
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