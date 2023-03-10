import React from "react"
import { Link } from "gatsby"
//import { logout } from "../../services/auth"

const ListReviews = () => (
  <nav className="mb-4 bg-white rounded-sm shadow flex justify-between">
    <div className="App">
      <h1>Lists/Reviews:</h1>
      <br />
      <br />
      <Link className="Link" to="/user/recipe-user">
        <h3>User's Recipes</h3>
      </Link>
      <br />
      <Link className="Link" to="/user/user-search2">
        <h3>Recipe List</h3>
      </Link>
      <br />
      <Link className="Link" to="/user/deals-dashboard">
        <h3>Deals</h3>
      </Link>
      <br />
      <br />
    </div>
  </nav>
)

export default ListReviews
