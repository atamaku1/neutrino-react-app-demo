module.exports = {
  options:{
    tests:"src"
  },
  use: [
    ['neutrino-preset-airbnb-base', {
      eslint: {
        baseConfig: {
          extends: ['plugin:react/recommended']
        }
      }
    }],
    ['neutrino-preset-react',{
      devServer: {
        overlay: true
      }
    }],
    ['neutrino-preset-jest',{
      "coverageThreshold": {
      "global": {
        "branches": 50,
        "functions": 50,
        "lines": 50,
        "statements": 50
      }
    }
    }]
  ]
}
