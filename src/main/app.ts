import Fastify from 'fastify'
import { config } from 'dotenv'
import swagger from '@fastify/swagger'
import swagger_ui from '@fastify/swagger-ui'
import swaggerOptions from 'doc'

config()

const app = Fastify({ logger: true })

await app.register(swagger, swaggerOptions)
await app.register(swagger_ui)

app.get('/', async (_req, reply) => {
  await reply.type('application/json').code(200)
  return { message: 'Hello World!' }
})

app.get('/abc', async (_req, reply) => {
  await reply.type('application/json').code(200)
  return { message: 'abc' }
})

export default app
