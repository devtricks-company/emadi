import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Homeheader from "../components/homeheader/homeheader"
import Betterpost from "../components/betterPost/betterpost"
import Featuredpost from "../components/featuredPost/featuredpost"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container">
      <Homeheader />
      <Betterpost />
      <Featuredpost />
    </div>
  </Layout>
)

export default IndexPage
