module.exports = {
	head: {
    title: 'digitalSignage - Schilderwald as a Service',
		meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ]
  },
  generate: {
    dir: 'docs',
    routes: [
      '/',
      '/kliemannsland',
      '/weihnachten'
    ]
  }
}
