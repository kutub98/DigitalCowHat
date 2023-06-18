import cors from 'cors'
import express, { Application, Request, Response } from 'express'
const App: Application = express()
App.use(cors())

//parser

App.use(express.json())
App.use(express.urlencoded({ extended: true }))
App.get('/', (req: Request, res: Response) => {
  res.send('database Connected')
})

export default App
