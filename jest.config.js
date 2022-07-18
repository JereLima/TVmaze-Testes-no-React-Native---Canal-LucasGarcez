module.exports = {
  preset: 'react-native',
  testPathIgnorePatterns: [],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  jest: {setupFiles: ['<rootDir>/jestSetupFile.js']},
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.tsx', '!src/**/*.spec.tsx'],
  coverageReporters: ['lcov'],
  setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
  modulePathIgnorePatterns: ['mocks'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
