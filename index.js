const express = require("express");
const nunjucks = require("nunjucks");

const app = express();

nunjucks.configure("views", {
    autoescape: true,
    express: app,
    watch: true,
})

app.set("view engine", "njk");

app.get('/', (req, res) => {
   
    const alunos = [
        {
            id:1,
            nome: "Pierre",
            idade: 21,
            profissao: "Programador"
        },
        {
            id:2,
            nome: "Daniel",
            idade: 21,
            profissao: "Programador"
        },
        {
            id:3,
            nome: "José Pedro",
            idade: 15,
            profissao: "Professor"
        }
    ]


     res.render('alunos', {alunos: alunos, totalAlunos: alunos.length});
})



app.listen(3000);