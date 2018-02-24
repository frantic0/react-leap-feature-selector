module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'LeapFeatureSelector',
      externals: {
        react: 'React'
      }
    }
  }
}
