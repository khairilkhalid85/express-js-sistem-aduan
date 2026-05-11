import express from 'express'
import aduanRouter from './router/aduan.router.js'
const app = express();

app.use('/aduan', aduanRouter);
const port = 3000

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

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

