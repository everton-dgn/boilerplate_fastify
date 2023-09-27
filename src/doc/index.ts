import swagger from '@fastify/swagger'
import swagger_ui from '@fastify/swagger-ui'
import type { FastifyInstance } from 'fastify'

const swaggerInfo = {
  title: 'Boilerplate API',
  description: 'A simple API',
  version: '0.1.0'
}

const swaggerOptions = {
  swagger: {
    info: swaggerInfo
  }
}

const doc = async (app: FastifyInstance) => {
  await app.register(swagger, swaggerOptions)
  await app.register(swagger_ui, {
    prefix: '/doc'
  })
}

export default doc
