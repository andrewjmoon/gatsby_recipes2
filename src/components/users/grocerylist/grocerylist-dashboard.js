import React from "react"
import { Link } from "gatsby"
//import { logout } from "../../services/auth"

const GrocerylistDashboard = () => (
  <nav className="mb-4 bg-white rounded-sm shadow flex justify-between">
    <div className="App">
      <h2>Grocerylist Dashboard</h2>
      <br />
      <Link className="Link" to="/user/authorized/user-dashboard">
        User Home
      </Link>
      <br />
      <br />
      <Link className="Link" to="/user/authorized/grocerylist-add">
        Add Grocerylists
      </Link>
      <br />
      <br />
      <Link className="Link" to="/user/authorized/user-search5">
        Grocerylist Posts
      </Link>
      <br />
      <br />
      <Link className="Link" to="/user/authorized/update-title4">
        Update Title
      </Link>
      <br />
      <br />
      <Link className="Link" to="/user/authorized/update-content4">
        Update Content
      </Link>
      <br />
      <br />
    </div>
  </nav>
)

export default GrocerylistDashboard