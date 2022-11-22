
// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require('next/jest')

 
const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest"],
  },
}

module.exports = createJestConfig(customJestConfig)
