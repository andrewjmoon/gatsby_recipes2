import React from "react"
import { Link, navigate } from "gatsby"
import { logout } from "netlify-identity-widget"


const DashboardNav = () => (
  <nav>
    <div>
      <h2>Dashboard Page:</h2>
      <br />
      <Link className="Link" to="/">
        <h4>Home Page</h4>
      </Link>
      <br />
      <Link className="Link" to="/user/subscription">
        <h4>Subscription</h4>
      </Link>
      <br />
      <Link className="Link" to="/user/subscription-details">
        <h4>Details</h4>
      </Link>
      <br />
      <Link className="Link" to="/user/authorized/user-dashboard">
        <h4>User Dashboard</h4>
      </Link>
    </div>
    <br />
    <div>
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

export default DashboardNav
