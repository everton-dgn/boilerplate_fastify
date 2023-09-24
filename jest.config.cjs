module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['src/**/*.ts'],
  testPathIgnorePatterns: ['/node_modules', '/.dist'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  globalSetup: '<rootDir>/.jest/timezoneMock.ts',
  coverageDirectory: 'coverage',
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  fakeTimers: {
    enableGlobally: true
  },
  passWithNoTests: true,
  transform: {
    '^.+\\.ts$': '@swc/jest'
  },
  clearMocks: true
}
