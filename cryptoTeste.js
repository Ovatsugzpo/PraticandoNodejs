const crypto = require('crypto')

crypto.pbkdf2('hulkesmaga3vezes...', 'gluglu', 33, 512, 'sha512', (err, key)=>{
    if (err) throw err
    console.log(key)
})