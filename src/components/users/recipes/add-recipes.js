import React from "react"
import { Link } from "@reach/router"
import PostEditor from "./post-editor"

const AddRecipes = () => {
  return (
    <div className="App">
      <Link className="Link" to="/user/authorized/user-dashboard">
        User Home
      </Link>
      <br />
      <br />
      <Link className="Link" to="/user/authorized/recipe-dashboard">
        Public Recipes
      </Link>
      <br />
      <br />
      <div>
        <PostEditor />
      </div>
    </div>
  )
}

export default AddRecipes
