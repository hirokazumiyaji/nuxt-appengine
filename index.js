const { Nuxt, Builder } = require('nuxt')

const app = require('express')()

const port = Number(process.env.PORT) || 3000

const config = require('./nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'
const nuxt = new Nuxt(config)

app.use(nuxt.render)

if (config.dev) {
  new Builder(nuxt).build()
    .then(listen)
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
}
else {
  listen()
}

function listen() {
  app.listen(port, () => {
    console.log(`App listening on port ${port}`)
  })
}
