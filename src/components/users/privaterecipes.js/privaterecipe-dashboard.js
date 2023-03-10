import React from "react"
import { Link } from "gatsby"
//import { logout } from "../../services/auth"

const PrivateRecipeDashboard = () => (
  <nav className="mb-4 bg-white rounded-sm shadow flex justify-between">
    <div className="App">
      <h2>Private Recipe Dashboard</h2>
      <br />
      <Link className="Link" to="/user/authorized/user-dashboard">
        User Home
      </Link>
      <br />
      <br />
      <Link className="Link" to="/user/authorized/recipe2-add">
        Add Private Recipes
      </Link>
      <br />
      <br />
      <Link className="Link" to="/user/authorized/user-search3">
        Private Recipe Posts
      </Link>
      <br />
      <br />
      <Link className="Link" to="/user/authorized/recipe2-list">
        Private Recipe List
      </Link>
      <br />
      <br />
      <Link className="Link" to="/user/authorized/update-content2">
        Update Content
      </Link>
      <br />
      <br />
      <Link className="Link" to="/user/authorized/update-title2">
        Update Title
      </Link>
      <br />
      <br />
    </div>
  </nav>
)

export default PrivateRecipeDashboard
