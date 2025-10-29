const { defineConfig } = require("cypress");
const fs = require('fs');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      
      // deletar uma pasta
      on('task', {deletarPasta(nomePasta) {
        console.log('deletando pasta ', nomePasta);

        return new Promise( (resolve, reject) => {
          fs.rm(nomePasta, {maxRetries: 2, recursive: true}, (erro) => {
            if(erro) {
              console.log(erro);
              return reject(erro);
            }

            resolve(null);
          })
        })
      }});

      //config
    },
    experimentalStudio: true,
    baseUrl: 'http://localhost:3000'
    //video: true habilita o video para cada teste
  },
});
