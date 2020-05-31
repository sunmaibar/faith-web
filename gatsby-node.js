const path = require("path")

//動態創造網頁
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query GetProducts {
      featuredProduct: allContentfulProducts {
        nodes {
          slug
        }
      }
    }
  `)
  result.data.featuredProduct.nodes.forEach(product => {
    createPage({
      path: `/products/${product.slug}`,
      component: path.resolve("src/templates/prodcut-template.js"),
      context: {
        slug: product.slug,
      },
    })
  })
}
