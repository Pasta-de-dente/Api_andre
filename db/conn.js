const mongoose = require("mongoose");

async function main () {

    try {
        
        mongoose.set("strictQuery", true);

        await mongoose.connect("mongodb+srv://root:7hh5jLhnygqFyDPw@cluster0.n7nuddd.mongodb.net/?retryWrites=true&w=majority")

        console.log("Conectado ao banco");

    } catch (error) {
        console.log(`Erro: ${error}`);
    }

}

module.exports = main;