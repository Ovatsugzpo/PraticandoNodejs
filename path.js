const path = require('path')

console.log('basename:', path.basename(`${__dirname}/block.js`))
console.log('dirname:', path.dirname(`${__dirname}/block.js`))
console.log('extname:', path.extname(`${__dirname}/block.js`))
console.log('normalize:', path.normalize('c:/Users//ovats\\Desktop/CursoNode/../CursoNode/path.js/.'))
console.log('relative:', path.relative(`${__dirname}/block.js`, `${__dirname}/Pasta/MKDIR/arquivo.html`))
console.log('resolve:', path.resolve(`./console.js`))
console.log('caminho com espaço:', path.toNamespacedPath(`${__dirname}/arquivo com espaço.js`))