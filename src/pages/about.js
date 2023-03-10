import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout className="App">
    <SEO title="Page two" />
    <h1>About page</h1>
    <p>
      This site allows a user to add and see recipes from other users, store
      private recipes, compile meal plans, and create grocery lists. The user
      can also search recipes by title, user, and categories. The user can email
      about food and recipe questions/help and we will respond accordingly.
      Periodic food gift card raffles will be given as well. The user signs up
      for an account and then types in credit card information for a
      subscription. Note, the recipe functions will not work until payment is
      made.
      <br />
      The monthy subscription fee will be $2.00.{" "}
    </p>
    <br />
    <p>Press the RecipeStash in the header to return to the home page.</p>
    <Link className="Link" to="/">
      Go back to the homepage
    </Link>
  </Layout>
)

export default About
