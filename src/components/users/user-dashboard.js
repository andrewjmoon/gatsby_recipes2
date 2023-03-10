import React from "react"
import { Link, navigate } from "gatsby"
import { logout } from "netlify-identity-widget"


const UserDashboard = () => (
  <nav className="mb-4 bg-white rounded-sm shadow flex justify-between">
    <div className="App">
      <h2>User Dashboard:</h2>
      <br />
      <Link className="Link" to="/user/dashboard">
        <h4>Dashboard</h4>
      </Link>
      <br />
      <Link className="Link" to="/user/authorized/recipe-dashboard">
        <h4>Public Recipe Home</h4>
      </Link>
      <br />
      <Link className="Link" to="/user/authorized/privaterecipes-dashboard">
        <h4>Private Recipe Home</h4>
      </Link>
      <br />
      <Link className="Link" to="/user/authorized/grocerylist-dashboard">
        <h4>Grocerylist Home</h4>
      </Link>
      <br />
      <Link className="Link" to="/user/authorized/mealplan-dashboard">
        <h4>Mealplan Home</h4>
      </Link>
      <br />
      <Link className="Link" to="/user/authorized/instructions">
        <h4>Instructions</h4>
      </Link>
      <br />
      <button
        onClick={() => {
          logout()
          navigate("/")
        }}
        className="flex items-center p-4"
      >
        Logout
      </button>
      <br />
      <br />
      <br />
    </div>
  </nav>
)

export default UserDashboard
