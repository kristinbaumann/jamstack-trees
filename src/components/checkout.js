import React, { Component } from "react"

class Checkout extends Component {
  componentDidMount() {
    this.stripe = window.Stripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY, {
      betas: ["checkout_beta_4"],
    })
  }

  async redirectToCheckout(event) {
    event.preventDefault()

    const { error } = await this.stripe.redirectToCheckout({
      items: [{ sku: "sku_FAyGOXiaIMteTS", quantity: 1 }],
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
    return (
      <button onClick={event => this.redirectToCheckout(event)}>
        Plant a tree
      </button>
    )
  }
}

export default Checkout
