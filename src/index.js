const { json } = require('express');
const express = require('express');
const res = require('express/lib/response');
const app = express();
app.use(json())
app.get('/home',(req,res) =>{
    res.send("Salve deu bom :)")
});

app.get('/DadosPessoais',(req,res) =>{
    res.send([
        {
            nome: "Ryan",
            data_nascimento :"25/01/2002",
            email:"ryanyan733@gmail.com"
        }
    ]);
});

app.get('/Formacao',(req,res) =>{
    res.send([
        {
            formação: "ADS",
            local: "etec aristoteles ferreira",
        }
    ]);
});

app.get('/Projetos',(req,res) =>{
    res.send([
        {
            projetos: ["smartApi","add-in office","robots"],
        }
    ]);
});

app.get('/Experiencia',(req,res) =>{
    res.send([
        {
            Anos: "3 anos",
            setor: "Dev robos para captura de dados",
        }
    ]);
});
app.get("/Lazer",(req,res) => {
    res.send([{
        lazeres: ["video game","filmes","basquete","churrasco"]
    }])
});

app.post("/client",(req,res) => {
    const {nome, telefone, idade, profissao,email} = req.body;
    res.send(`O nome do cliente enviado é: ${nome} e a email é: ${email}`);
});

app.put("/client",(req,res) => {
    const {nome, telefone, idade, profissao,email} = req.body;
    const {id} = req.query;
    res.send(`O nome do cliente enviado é: ${nome} e a email é: ${email} com id: ${id} foi atualizado`);
});

app.delete("/client/:id", (req,res) => {
    const {id} = req.params;
    res.send(`Id Client ${id} excluido`)
});

app.listen(3333,() =>{
    console.log("Server está ON")
});

// npm install nodemon -D