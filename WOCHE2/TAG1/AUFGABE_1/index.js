import http from 'http'
import fs from 'fs'


function ultimateSendFile(path, res, code) {
    fs.readFile(path, (err, data) => {
        if (err) {
            res.writeHead(500)
            res.end()
            return
        }
        console.log(data);
        if (path.includes('.jpg')) {
            res.writeHead(200, {
                'Content-Type': 'image/jpg'
            })
            res.end(data)
            return
        }
        res.write(data.toString())
        res.end()
    })
}
function ultimativerRequestHandler(req, res) {
    console.log('Unsere Methode:', req.method, req.url);
    if (req.url === '/') {
        ultimateSendFile('./index.html', res)
    }
    else {
        ultimateSendFile('.' + req.url, res)
    }
}

const server = http.createServer(ultimativerRequestHandler)
server.listen(9898, () => console.log('Ich stehe vor der Tür und warte'))