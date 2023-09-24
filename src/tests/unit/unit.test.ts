import { example } from 'main/example'

describe('Fastify Server', () => {
  it('should return Hello World!', () => {
    expect(example(5)).toBe(30)
  })
})
