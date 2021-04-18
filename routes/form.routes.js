const { Router } =  require("express")
const router = Router() 

const Form = require('../model/form')
const multer = require('multer');

const storage = multer.diskStorage({
  //destination for files
  destination: function (request, file, callback) {
    callback(null, './public/uploads/images');
  },

  //add back the extension
  filename: function (request, file, callback) {
    callback(null, Date.now() + file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fieldSize: 1024 * 1024 * 3,
  },
});

router.get('/new', (request, response) => {
  response.render('new');
});


//upload parameters for multer



/// img

router.get('/form', async (req, res) => {
  const forms = await Form.find()
  res.json( forms )
})

router.get('/form/:id', async (req, res) => {
  const { id } = req.params 
  const forms = await Form.findOne({ _id: id })
  res.json(forms)
})

router.post('/cform',upload.single('image'), async (req, res) => {

  const { nom, quest } = req.body;
  const img = req.file.filename;
  const forms = new Form({nom, quest, img})
  const result = await forms.save() 
  res.json({ msg: "Question ajouter", result });
});

router.delete('/form/:id', async (req, res) => {
  const { id } = req.params
  const result = await Form.deleteOne({ _id: id })
  res.json({ msg:'Form suprimer', result})
})

router.get('/fom/:user', async (req, res) => {
  const { user } = req.params 
  const forms = await Form.find({ user: user })
  res.json(forms)
})

module.exports = router