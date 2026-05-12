import { Router } from 'express';
const aduanData = [
    { id: 1, title: 'Aduan 1', description: 'Description for Aduan 1' },
    { id: 2, title: 'Aduan 2', description: 'Description for Aduan 2' },
];

const aduanRouter = Router();

const aduans = new Map();
aduans.set('1', {
    nama_pengadu: 'John Doe',
    catatan: 'Catatan aduan 1',
    kategori_aduan: 'Kategori 1',
    email: 'john.doe@example.com',
});
aduans.set('2', {
    nama_pengadu: 'Jane Doe',
    catatan: 'Catatan aduan 2',
    kategori_aduan: 'Kategori 2',
    email: 'jane.doe@example.com',
});

// Example route to view aduan
// aduanRouter.get('/', (req, res) => {
//     // Mock data for demonstration

//     res.status(200).json({
//         success: true,
//         data: aduanData,
//     });
// });

aduanRouter.get('/', (req, res) => {
    res.status(200).json({
      success: true,
      data: Array.from(aduans.values()),
    });
  });

// aduanRouter.get('/create', (req, res) => {
//    // res.send('Hello khai!');

//    res.json({
//         message: "Aduan berjaya diwujudkan",
//         "nama": "khai",
//         "emel": "khai@mail.com",
//         "telefon": "0123456789"
//     })
// })

aduanRouter.post('/create', (req, res) => {
    // body params
    /**
     * 1. Nama Pengadu
     * 2. catatan
     * 3. categori aduan
     * 4. email
     *
     * // validasi - DONE
     */

    const { nama_pengadu, catatan, kategori_aduan, email } = req.body;

    // validation / validasi
    if (!nama_pengadu || !catatan || !kategori_aduan || !email) {
        return res.status(400).json({
            message:
                'All fields (nama_pengadu, catatan, kategori_aduan, email) are required.',
        });
    }

    const id = String(Date.now()); // - create a unique id, we are using date, but we will change to uuid
    const aduan = { nama_pengadu, catatan, kategori_aduan, email };
    aduans.set(id, aduan); // -- add new record

    return res
        .status(201)
        .json({ message: 'Aduan created.', data: { id: id, ...aduan } });
});

export default aduanRouter