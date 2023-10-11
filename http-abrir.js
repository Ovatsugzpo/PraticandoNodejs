const http = require('http'),
    host = '127.0.0.1',
    port = 3000,
    url = `http://${host}:${port}`

const server = http.createServer((req, res)=>{
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Teste <br> oi </h1>')
})
server.listen(port, host, ()=>{
    console.log(url)
})

// Abrir o navegador sozinho

const open = (process.platform == 'darwin' ? 'open' : 
            process.platform == 'win32' ? 'start' : 
            'xdg-open')

require('child_process').exec(open + ' ' + url)