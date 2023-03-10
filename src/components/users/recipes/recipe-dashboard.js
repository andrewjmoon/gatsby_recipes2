import React from "react"
import { Link } from "gatsby"
//import { logout } from "../../services/auth"

const RecipeDashboard = () => (
  <nav className="mb-4 bg-white rounded-sm shadow flex justify-between">
    <div className="App">
      <h2>Public Recipe Dashboard</h2>
      <br />
      <Link className="Link" to="/user/authorized/user-dashboard">
        User Home
      </Link>
      <br />
      <br />
      <Link className="Link" to="/user/authorized/recipe-add">
        Add Public Recipes
      </Link>
      <br />
      <br />
      <Link className="Link" to="/user/authorized/user-search">
        Public Recipe Posts
      </Link>
      <br />
      <br />
      <Link className="Link" to="/user/authorized/recipe-list">
        Public Recipe List
      </Link>
      <br />
      <br />
      <Link className="Link" to="/user/authorized/update-content">
        Update Content
      </Link>
      <br />
      <br />
      <Link className="Link" to="/user/authorized/update-title">
        Update Title
      </Link>
      <br />
      <br />
    </div>
  </nav>
)

export default RecipeDashboard
