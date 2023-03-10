import React from "react"
import { Link } from "gatsby"
//import { logout } from "../../services/auth"

const MealplanDashboard = () => (
  <nav className="mb-4 bg-white rounded-sm shadow flex justify-between">
    <div className="App">
      <h2>Mealplan Dashboard</h2>
      <br />
      <Link className="Link" to="/user/authorized/user-dashboard">
        User Home
      </Link>
      <br />
      <br />
      <Link className="Link" to="/user/authorized/mealplan-add">
        Add Mealplan
      </Link>
      <br />
      <br />
      <Link className="Link" to="/user/authorized/user-search4">
        Mealplan Posts
      </Link>
      <br />
      <br />
      <Link className="Link" to="/user/authorized/mealplan-list">
        Mealplan List
      </Link>
      <br />
      <br />
      <Link className="Link" to="/user/authorized/update-title3">
        Update Title
      </Link>
      <br />
      <br />
      <Link className="Link" to="/user/authorized/update-content3">
        Update Content
      </Link>
      <br />
      <br />
    </div>
  </nav>
)

export default MealplanDashboard
