console.assert(false, 'a condição deu falsa entao eu apareço lol')
console.assert(true, 'true')

const obj = [{nome: 19, idade: 'gusta', pix: '135.353.774-98'}, {nome: 13, idade: 'pirralha', pix: '135.353.774-98'},
    {nome: 20, idade: 'paulo', pix: '135.353.774-98'}
]

console.table(obj)

console.time()
for (let index = 0; index < 33333; index++) {
    console.count()
}
console.timeEnd()

console.countReset()
console.count()
console.clear()