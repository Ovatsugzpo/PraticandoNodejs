const fsP = require('fs').promises

async function create() {
    let arq = await fsP.writeFile('./teste.txt', 'escrevendo arquivo com promises')
    let arqlido = await fsP.readFile('./teste.txt')
    return new Buffer.from(arqlido)
}
// pra pegar oq ta no arquivo
create().then(console.log).catch(err=>{
    throw err
})