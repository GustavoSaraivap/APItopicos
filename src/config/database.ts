import mongoose from "mongoose"

mongoose.connect("mongodb+srv://topicos:leondre1@cluster0.9rdki.mongodb.net/SextaManha?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("Aplicação conectada ao banco de dados!");
    })
    .catch((erro) => {
        console.log(`Erro ao conectar com o banco de dados: ${erro}`)
    });

export { mongoose };