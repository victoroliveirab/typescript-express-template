module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['js', 'json', 'ts', 'node'],
  testEnvironment: 'node',
  preset: 'ts-jest',
  moduleNameMapper: {
    '^@app/(.*)$': '<rootDir>/src/$1',
  },
};
