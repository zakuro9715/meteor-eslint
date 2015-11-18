Package.describe({
  name: 'zakuro:eslint',
  version: '0.0.1',
  summary: 'Lint all js files with eslint',
  git: 'https://github.com/zakuro9715/meteor-eslint.git',
  documentation: '../../README.rst',
})

Package.registerBuildPlugin({
  name: 'eslint',
  sources: [
    'plugin/eslint.js',
  ],
  npmDependencies: {
    'eslint': '1.9.0',
  }
})

Package.onUse(function(api) {
  api.versionsFrom('1.2.1')
  api.use('isobuild:linter-plugin@1.0.0')
})

Package.onTest(function(api) {
  api.use('tinytest')
  api.use('zakuro:eslint')
})
