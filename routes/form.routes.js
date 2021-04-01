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