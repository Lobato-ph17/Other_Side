import http from 'node:http'
import {serveStatic} from './utils/serverStatic.js'
import fs from 'node: fs/promises'


const PORT = 8000;

const __dirname = import.meta.dirname;

const server = http.createServer(async (req,res) => {

    serveStatic(__dirname);

    const content = await fs.readfile(serveStatic())

     res.statusCode = 200
     res.setHeader('Content-Type', 'text/html')
     res.end(content)
})

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))