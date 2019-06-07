import React, { Component } from "react"
import { graphql, StaticQuery } from "gatsby"
import ProductItem from "./ProductItem"

class ProductList extends Component {
  state = {
    stripe: null,
  }

  componentDidMount() {
    this.setState({
      stripe: window.Stripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY, {
        betas: ["checkout_beta_4"],
      }),
    })
  }
  render() {
    return (
      <StaticQuery
        query={graphql`
          query SkusForProduct {
            skus: allStripeSku {
              edges {
                node {
                  id
                  currency
                  price
                  attributes {
                    name
                  }
                  image
                }
              }
            }
          }
        `}
        render={({ skus }) => (
          <div className="product-list">
            {skus.edges.map(({ node: sku }) => (
              <ProductItem key={sku.id} sku={sku} stripe={this.state.stripe} />
            ))}
          </div>
        )}
      />
    )
  }
}

export default ProductList
