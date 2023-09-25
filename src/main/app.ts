import Fastify from 'fastify'
import { config } from 'dotenv'
import swagger from '@fastify/swagger'
import swagger_ui from '@fastify/swagger-ui'

config()

const app = Fastify({ logger: true })

const swaggerInfo = {
  title: 'Minha API',
  description: 'Uma API simples',
  version: '0.1.0'
}

const commonResponses = {
  '200': {
    description: 'A saudação',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            message: { type: 'string' }
          }
        }
      }
    }
  }
}

const rootPath = {
  get: {
    summary: 'Retorna uma saudação',
    tags: ['Saudação'],
    responses: commonResponses
  }
}

const abcPath = {
  get: {
    summary: 'Retorna abc',
    tags: ['ABC'],
    responses: commonResponses
  }
}

const swaggerPaths = {
  '/': rootPath,
  '/abc': abcPath
}

const swaggerOptions = {
  prefix: '/documentation',
  swagger: {
    info: swaggerInfo,
    paths: swaggerPaths
  }
}

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
