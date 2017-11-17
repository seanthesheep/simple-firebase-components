exports.config = {
  namespace: 'simple-firebase-components',
  generateDistribution: true,
  generateWWW: false,
  bundles: [
    { components: ['fb-string', 'fb-content-editor'] }
  ],
  collections: [
    { name: '@stencil/router' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
