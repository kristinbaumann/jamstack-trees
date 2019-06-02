import React, { Component } from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"

class ProductItem extends Component {
  async redirectToCheckout(event, sku) {
    event.preventDefault()
    const { error } = await this.props.stripe.redirectToCheckout({
      items: [{ sku, quantity: 1 }],
      successUrl: process.env.URL
        ? `${process.env.URL}/thanks/`
        : `http://localhost:8000/thanks/`,
      cancelUrl: process.env.URL || `http://localhost:8000/`,
    })

    if (error) {
      console.warn("Error:", error)
    }
  }

  formatPrice = (amount, currency) => {
    let price = (amount / 100).toFixed(2)
    let numberFormat = new Intl.NumberFormat(["en-US"], {
      style: "currency",
      currency: currency,
      currencyDisplay: "symbol",
    })
    return numberFormat.format(price)
  }

  render() {
    const { sku } = this.props
    return (
      <div className="product-item">
        <img
          src={sku.image}
          alt={sku.attributes.name}
          onClick={event => this.redirectToCheckout(event, sku.id)}
        />
        <div className="product-item-text">
          <p>{sku.attributes.name}</p>
          {/* <p></p> */}
          <button
            className="button button-secondary"
            onClick={event => this.redirectToCheckout(event, sku.id)}
          >
            Plant ({this.formatPrice(sku.price, sku.currency)})
          </button>
        </div>
      </div>
    )
  }
}

class ProductList extends Component {
  state = {
    stripe: window.Stripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY, {
      betas: ["checkout_beta_4"],
    }),
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

const PagePlant = props => (
  <Layout pathname={props.location.pathname}>
    <div className="page container">
      <ProductList />
    </div>
  </Layout>
)

export default PagePlant
