const express = require('express')
const fileUpload = require('express-fileupload')
const { v4: uuidv4} = require('uuid')

const app = express()

app.use(fileUpload())

app.post('/upload', (req, res) => {

    if(!req.files){
        res.status(400).send('Sem arquivos!')
    }
    let img = req.files.imagem
    let nome = uuidv4(req.files.imagem.name)
    let ext = req.files.imagem.mimetype.split('/')[1]

    img.mv(`src/assets/images/${nome}.${ext}`)
    return res.json({msg: "Ok"})
})

app.listen(3333, () => console.log('On'))