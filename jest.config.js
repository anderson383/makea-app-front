// jest.config.js
// Sync object
const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig');

module.exports = {
  collectCoverageFrom: [
    'src/components/**/*.{js,jsx,ts,tsx}',
    'src/helpers/**/*.{js,jsx,ts,tsx}',
    'src/hooks/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/node_modules/',
  ],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 95,
      statements: 95
    }
  },
  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' })
  },
  "testEnvironment": "node",
  preset: "jest-expo",
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg|react-router-native)"
  ],
  globals: {
    __DEV__: true,
    'ts-jest': { tsconfig: 'tsconfig.jest.json'},
    '^.+\\.(ts|tsx)$': 'ts-jest',
  }
};