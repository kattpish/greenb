const path = require('path')
const data = require('./product.json')

exports.createPages = ({ actions }) => {
  const { createPage } = actions

  const template = path.resolve('./src/templates/product.js')

  data.forEach((product_obj) => {
    const path = product_obj.url
    createPage({
      path,
      component: template,
      context: product_obj,
    })
  })
}
