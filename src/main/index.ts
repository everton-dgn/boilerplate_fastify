import { fastify } from 'fastify'
import { config } from 'dotenv'

config()

const app = fastify({
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

app.listen({ port: Number(process.env.APP_PORT) }, (err, address) => {
  if (err) {
    app.log.error(err)
    process.exit(1)
  }
})

export default app
