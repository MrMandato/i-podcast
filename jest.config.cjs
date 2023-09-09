module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  },
  testEnvironment: "jsdom",
  "globals": {
    "IS_REACT_ACT_ENVIRONMENT": true
  }
}