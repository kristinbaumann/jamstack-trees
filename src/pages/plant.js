import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import Checkout from "../components/checkout"

const ProductList = () => (
  <StaticQuery
    query={graphql`
      query SkusForProduct {
        skus: allStripeSku {
          edges {
            node {
              id
              price
              attributes {
                name
              }
            }
          }
        }
      }
    `}
    render={({ skus }) => (
      <div>
        {skus.edges.map(({ node: sku }) => (
          <p key={sku.id}>
            Product: {sku.attributes.name} (Price {sku.price} Cents)
          </p>
        ))}
      </div>
    )}
  />
)

const PagePlant = props => (
  <Layout pathname={props.location.pathname}>
    <div className="page container">
      <p>Page Plant</p>
      <ProductList />
      <Checkout />
    </div>
  </Layout>
)

export default PagePlant
