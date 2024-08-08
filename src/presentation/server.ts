import express from 'express'
import path from 'path'

interface Options {
    PORT: number;
    PUBLIC_PATH:string;
}

export class Server {

    private app = express()
    private port: number
    private publicPath: string

    constructor(options: Options) {
        this.port = options.PORT
        this.publicPath = options.PUBLIC_PATH
    }

    async start () {

        // * Middlewares

        // * Public Folder

        this.app.use( express.static( this.publicPath ) )


        this.app.get('*', (req, res) => {
            const indexPath = path.join(__dirname + `../../../${ this.publicPath }/index.html`)
            console.log(req.url)
            res.sendFile(indexPath)
        } )


        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`)
        })
    }

}