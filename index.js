const express = require("express");     //A linha 1 e 2, cria o servidor. Linha 1  - está IMPORTANDO o Express, Linha 2 - Você está EXECUTANDO o Express: Isso cria o servidor.
const servidor = express();

servidor.get ('/pessoa/:nome/:idade', (req,res) =>{

        const nome = req.params.nome 
        const idade = req.params.idade
        res.send(`Seu nome é ${nome} e sua idade é ${idade} anos.`)

})
const porta = 3029;

servidor.listen(porta, () => {
  console.log("Afonso servidor está ligado");
});


