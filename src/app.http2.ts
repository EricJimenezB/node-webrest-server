import http2 from 'http2'
import fs from 'fs'

const options = {
    key: fs.readFileSync('./keys/server.key'),
    cert: fs.readFileSync('./keys/server.crt'),
  };

const server = http2.createSecureServer( options, (req, res) => {
    console.log(req.url)

    // res.writeHead(200, { 'Content-Type': 'text/html' })
    // res.write(`<h1 style="color:red">URL ${req.url}</h1>`)

    // res.end()

    // const data = { name: 'John Doe', age: 30, city: 'New York'}

    // res.writeHead(200, { 'Content-Type': 'application/json' })

    // res.end(JSON.stringify(data))

    if (req.url === '/css/style.css') {
        const cssFile = fs.readFileSync('./public/css/styles.css', 'utf-8')
        res.writeHead(200, { 'Content-Type': 'text/css' })
        res.write(cssFile)
        res.end()
    }

    if (req.url === '/js/app.js') {
        const jsFile = fs.readFileSync('./public/js/app.js', 'utf-8')
        res.writeHead(200, { 'Content-Type': 'application/javascript' })
        res.write(jsFile)
        res.end()
    }

    if (req.url === '/') {
        const htmlFile = fs.readFileSync('./public/index.html', 'utf-8')
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(htmlFile)
        res.end()
    }
})

server.listen(3000, () => {
    console.log('server running on port 3000')
})