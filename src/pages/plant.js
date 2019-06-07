import React from "react"

import Layout from "../structure/layout"
import ProductList from "../components/ProductList"

const PagePlant = props => (
  <Layout pathname={props.location.pathname}>
    <div className="page container">
      <ProductList />
    </div>
  </Layout>
)

export default PagePlant
