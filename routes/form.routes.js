const { Router } =  require("express")
const router = Router() 

const Form = require('../model/form')

router.get('/form', async (req, res) => {
  const forms = await Form.find()
  res.json( forms )
})

router.get('/form/:id', async (req, res) => {
  const { id } = req.params 
  const forms = await Form.findOne({ _id: id })
  res.json(forms)
})

router.post('/cform', async (req, res) => {
  const { nom, quest } = req.body
  const forms = new Form({nom, quest})
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