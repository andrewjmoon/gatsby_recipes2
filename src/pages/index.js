import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout className="App">
    <SEO title="Home" />
    <h2>Welcome to the RecipeStash</h2>
    <p>
      A place to share and see recipes, save private recipes, and plan grocery
      lists and meal plans.
    </p>
    <Link className="Link" to="/about/">
      <h4>About</h4>
    </Link>{" "}
    <Link className="Link" to="/user/dashboard">
      <h4>Dashboard</h4>
    </Link>{" "}
    <br />
    <p>Photo by Ella Olsson from Pexels</p>
    <br />
  </Layout>
)

export default IndexPage
