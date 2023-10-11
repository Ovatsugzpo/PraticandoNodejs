let promessa = function (Time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, Time);
    })
}
async function console2(params) {
    console.log('Vou chamar a 1')
    await promessa(1000)
    console.log('vou chamar a 2')
    await promessa(2000)
    console.log('vou chamar a 3')
    await promessa(3000)
    console.log('vou chamar a 4')
    await promessa(4000)
    console.log('comi todas')
}

console2()
