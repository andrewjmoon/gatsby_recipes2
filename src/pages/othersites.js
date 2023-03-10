import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Otherprojects = () => (
  <Layout className="App">
    <SEO title="Othersites" />
    <h1>Other projects</h1>
    <p className="Link">
      A subscription app for reviewing/creating lists for movies, tvshows,
      music, and books.
      <a
        style={{ color: "black" }}
        href="https://reviews-lists-project.netlify.app"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        <br />
        <br />
        https://reviews-lists-project.netlify.app
      </a>
    </p>
    <br />

    <Link className="Link" to="/user/dashboard">
      Go back to the Dashboard
    </Link>
  </Layout>
)

export default Otherprojects
