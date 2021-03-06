 const { Router } =  require("express")
 const router = Router() 

const Book = require('../model/book')

 router.get('/book', async (req, res) => {
   const books = await Book.find()
   res.json( books )
})

router.post('/book', async (req, res) => {
   const { nom, prenom, adresse, mdp } = req.body
   const book = new Book({nom, prenom, adresse, mdp})
   const result = await book.save() 
   res.json({ msg: "Personne ajouter", result });
});

router.delete('/book/:id', async (req, res) => {
   const { id } = req.params
   const result = await Book.deleteOne({ _id: id })
   res.json({ msg:'¨Personne suprimer', result})
})

router.get('/book/:id', async (req, res) => {
   const { id } = req.params 
   const books = await Book.findOne({ _id: id })
   res.json( books )
})

router.put('/book', async (req, res) => {
   const {id, nom, prenom, adresse, mdp } = req.body
   const result = await Book.updateOne({_id:id}, {$set:{nom, prenom, adresse, mdp}})
   res.json({ msg: "personne modifier", result})
})

 module.exports = router