import React from "react"
import { Link } from "@reach/router"
import PostEditor3 from "./post-editor3"

const AddLists = () => {
  return (
    <div className="App">
      <Link className="Link" to="/user/authorized/user-dashboard">
        User Home
      </Link>
      <br />
      <br />
      <Link className="Link" to="/user/authorized/grocerylist-dashboard">
        Grocery Lists
      </Link>
      <br />
      <br />
      <div>
        <PostEditor3 />
      </div>
    </div>
  )
}

export default AddLists
