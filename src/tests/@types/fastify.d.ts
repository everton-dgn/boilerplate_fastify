import type * as Fastify from 'fastify'
import { type Server, type IncomingMessage, type ServerResponse } from 'http'

declare global {
  namespace NodeJS {
    interface Global {
      fastifyInstance: Fastify.FastifyInstance<
        Server,
        IncomingMessage,
        ServerResponse
      >
    }
  }
}

global.fastifyInstance = fastifyInstance
