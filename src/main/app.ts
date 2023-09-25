import Fastify from 'fastify'
import { config } from 'dotenv'

config()

const app = Fastify({
  logger: true
})

app.get('/', async (_req, res) => {
  void res.type('application/json').code(200)
  return { message: 'Hello World!' }
})

app.get('/abc', async (_req, res) => {
  void res.type('application/json').code(200)
  return { message: 'abc' }
})

export default app
