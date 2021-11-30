var express = require('express')

var contatos = [
  { nome: "Messi", telefone: "+55009999999" },
  { nome: "Neymar", telefone: "+5500XXXXXXX" },
  { nome: "Cristiano Ronaldo", telefone: "+55000000000" },
  { nome: "Xuxa", telefone: "+55001111111" },
  { nome: "Eliana", telefone: "+55002222222" }
]

var api = express()

api.get("/", (req, res) => {
  res.json(contatos)
})

api.listen(3000)
