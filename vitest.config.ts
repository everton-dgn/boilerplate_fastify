import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    environment: 'node',
    globals: true,
    mockReset: true,
    clearMocks: true,
    passWithNoTests: true,
    coverage: {
      enabled: true
    }
  }
})
