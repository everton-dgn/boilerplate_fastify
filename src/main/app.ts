import Fastify from 'fastify'
import 'dotenv/config'
import doc from 'doc'

const app = Fastify({ logger: JSON.parse(process.env.LOGGER_ENABLED!) })

const initDocumentation = async () => {
  await doc(app)
}
initDocumentation().catch(error => {
  // eslint-disable-next-line no-console
  console.error('Failed to initialize documentation:', error)
})

app.get('/', async (_req, _) => ({
  message: 'Hello World!'
}))

app.get('/abc', async (_req, _) => ({
  message: 'abc'
}))

export default app
