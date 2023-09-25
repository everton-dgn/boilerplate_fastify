const swaggerInfo = {
  title: 'Boilerplate API',
  description: 'A simple API',
  version: '0.1.0'
}

const commonResponses = {
  '200': {
    description: 'A greeting message',
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

const swaggerPaths = {
  '/': {
    get: {
      summary: 'Returns a greeting message',
      tags: ['Saudação'],
      responses: commonResponses
    }
  },
  '/abc': {
    get: {
      summary: 'Returns abc',
      tags: ['ABC'],
      responses: commonResponses
    }
  }
}

const swaggerOptions = {
  prefix: '/doc',
  swagger: {
    info: swaggerInfo,
    paths: swaggerPaths
  }
}

export default swaggerOptions
