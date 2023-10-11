let funzao = function (timer, callback) {
    setTimeout(() => {
        callback()
    }, timer);
}
function console2() {
    console.log('executei')
}
function gçigçi() {
    console.log('Vou chamar a 1')
    funzao(1000, console2)
    console.log('vou chamar a 2')
    funzao(2000, console2)
    console.log('vou chamar a 3')
    funzao(3000, console2)
    console.log('vou chamar a 4')
    funzao(4000, console2)
    console.log('comi todas')
}
gçigçi()