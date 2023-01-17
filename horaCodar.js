const objs = [ {
  nome: "Marco",
  idade: 36,
  "esta-_trabalhando": true,
  detalhes_profissao: {
    profissao: "Desenvolvedor",
    empresa: "mercado Livre",
  },
  hobbies: ["programar", "ler", "correr"],
},
{
  nome: "Joao",
  idade: 25, 
  profissao: null, 
  empresa: "Empresa Y"
}
]

console.log(objs)

// Convertendo objetoJS para JSON (p/enviar os dados para API)
const jsonData = JSON.stringify(objs)
console.log(jsonData)
console.log(typeof jsonData)

//Convertendo JSON para objetoJS
const objData = JSON.parse(jsonData)
console.log(objData)

objData.map((pessoa) => {
  console.log(pessoa.nome)
})
