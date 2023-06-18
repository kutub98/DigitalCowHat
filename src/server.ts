import mongoose from 'mongoose'
import App from './App'
import Config from './Config/index'

const DatabaseConnect = async () => {
  try {
    await mongoose.connect(Config.DataBaseUrl as string)
    console.log('Database connected succsessfully')
    App.listen(Config.port, () => {
      console.log(` Successfully connected Port on ! ${Config.port}`)
    })
  } catch (errro) {
    console.log('Sorry! Failed to connect Database')
  }
}
DatabaseConnect().catch(console.dir)
