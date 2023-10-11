function calcular(num, funsaoParaResolver) {
    return setTimeout(() => {
        return funsaoParaResolver(null, 666 * num)
    }, 1000);
}
// callback
function callbackPratica(err, res) {
    if (err) throw err
    console.log(res)
}

calcular(5, callbackPratica)

// --------------------------------------------------------------------------------------

function promessa(num){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            res = num * 666
            res < 1000 ? resolve(res) : reject('muito grande')
        }, 1000)
    })
}
promessa(2).then(console.log).catch(err=> {throw err})