import dotenv from 'dotenv'
import path from 'path'
dotenv.config({ path: path.join(process.cwd(), '.env') })

export default {
  NODE_DEVELOPMENT: process.env.NODE_DEVELOPMENT,
  port: process.env.port,
  DataBaseUrl: process.env.DataBaseUrl,
}
