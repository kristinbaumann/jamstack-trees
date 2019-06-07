import React, { Component } from "react"
import { formatPrice } from "../helpers/util"

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
          <button
            className="button button-secondary"
            onClick={event => this.redirectToCheckout(event, sku.id)}
          >
            Plant ({formatPrice(sku.price, sku.currency)})
          </button>
        </div>
      </div>
    )
  }
}

export default ProductItem
