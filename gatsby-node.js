const path = require('path')
const data = require('./src/fixtures/product.json')

exports.createPages = ({ actions }) => {
  const { createPage } = actions

  const template = path.resolve('./src/templates/product.js')

  data.forEach((product) => {
    const path = product.url
    createPage({
      path,
      component: template,
      context: product,
    })
  })
}
