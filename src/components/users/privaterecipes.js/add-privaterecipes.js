import React from "react"
import { Link } from "@reach/router"
import PostEditor2 from "./post-editor2"

const AddPrivateRecipes = () => {
  return (
    <div className="App">
      <Link className="Link" to="/user/authorized/user-dashboard">
        User Home
      </Link>
      <br />
      <br />
      <Link className="Link" to="/user/authorized/privaterecipes-dashboard">
        Private Recipes
      </Link>
      <br />
      <br />
      <div>
        <PostEditor2 />
      </div>
    </div>
  )
}

export default AddPrivateRecipes
