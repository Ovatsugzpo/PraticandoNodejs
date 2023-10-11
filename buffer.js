const {Buffer} = require('buffer')

let box = Buffer.from('texto q vai entrar no buffer', 'utf-8')
let box2 = Buffer.from('texto q vai entrar', 'utf-8')
console.log(box)
console.log(box.compare(box2))
console.log(box.toString('ucs2'))