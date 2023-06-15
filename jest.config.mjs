import nextJest from 'next/jest.js';
 
const createJestConfig = nextJest({
  dir: './',
});
 
// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
  // Add more setup options before each test is run
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['/node_modules', '/.next/', '/cypress/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)', '!**/*.cy.tsx', '!**/layout.tsx'],
 
  testEnvironment: 'jest-environment-jsdom',
};
 
// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);