const cp = require('child_process')
const ls = cp.exec('ls')

ls.stdout.on('data', data=>{
    console.log(`stdout data: ${data}`)
})

ls.stderr.on('data', err=>{
    console.log(`stderr erro: ${err}`)
})

ls.on('close', data=>{
    console.log(`Saida do close: ${data}`)
})
//porcaria