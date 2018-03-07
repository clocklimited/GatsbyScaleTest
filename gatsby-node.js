const { resolve } = require('path')
const count = process.env.COUNT || 100
const isViaContext = process.env.VIA_CONTEXT || false

exports.createPages = async ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators
  if (isViaContext) {
    console.log(`\n\n\n\nCreating ${count} pages passing data via 'pathContext'\n\n`)
    const template = resolve('src/templates/product.jsx')
    for (let i = 0; i < count; i++) {
      createPage({
        path: `/products/${i}`,
        component: template,
        context: {
          heading: `Heading ${i}`,
          description: `Description ${i}`
        }
      })
    }
  } else {
    console.log(`\n\n\n\nCreating ${count} pages fetching data via graphql\n\n`)
    const template = resolve('src/templates/data-product.jsx')
    for (let i = 0; i < count; i++) {
      createPage({
        path: `/products/${i}`,
        component: template,
        context: {
          id: i
        }
      })
    }
  }
}
