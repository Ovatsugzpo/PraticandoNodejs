const evento = require('events')
class event extends evento{}
const meuEvento = new event()

meuEvento.on('oi', (x,y)=>{
    console.log(`oi ${x}, :${y}:`)
})
meuEvento.emit('oi', 'jfajalfk',10)