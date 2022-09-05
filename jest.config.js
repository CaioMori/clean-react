module.exports = {
  roots: ["<rootDir>/src"],
  testEnvironment: "node",
  collectCoverageFrom: ["<rootDir>/src/**/*.{ts,tsx}"],
  coverageDirectory: "coverage",
  transform: {
    ".+\\.ts$": "ts-jest",
  },
};
