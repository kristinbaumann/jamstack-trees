import React from "react"

import Layout from "../components/Layout"
import ProductList from "../components/ProductList"

const PagePlant = props => (
  <Layout pathname={props.location.pathname}>
    <div className="page container">
      <ProductList />
    </div>
  </Layout>
)

export default PagePlant
