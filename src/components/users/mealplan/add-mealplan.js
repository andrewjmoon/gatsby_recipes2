import React from "react"
import { Link } from "@reach/router"
import PostEditor4 from "./post-editor4"

const AddMealplan = () => {
  return (
    <div className="App">
      <Link className="Link" to="/user/authorized/user-dashboard">
        User Home
      </Link>
      <br />
      <br />
      <Link className="Link" to="/user/authorized/mealplan-dashboard">
        Mealplan Home
      </Link>
      <br />
      <br />
      <div>
        <PostEditor4 />
      </div>
    </div>
  )
}

export default AddMealplan
