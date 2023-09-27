import Fastify from 'fastify'
import 'dotenv/config'
import doc from 'doc/index.js'

const app = Fastify({ logger: JSON.parse(process.env.LOGGER_ENABLED!) })

await doc(app)

app.get('/', async (_req, _) => ({
  message: 'Hello World!'
}))

app.get('/abc', async (_req, _) => ({
  message: 'abc'
}))

export default app
