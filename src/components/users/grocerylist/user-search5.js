import React, { useState } from "react"
import { useLazyQuery } from "@apollo/client"
import gql from "graphql-tag"
import InputForm from "../shared/input-form"
import GroceryPosts from "./grocerylist-posts"

const SEARCH = gql`
  query Search($match: String) {
    grocerylist(
      order_by: { title: asc }
      where: {
        _or: [{ content: { _ilike: $match } }, { title: { _ilike: $match } }]
      }
    ) {
      title
      content
      id
    }
  }
`

const UserSearch5 = () => {
  const [inputVal, setInputVal] = useState("")
  const [search, { loading, error, data }] = useLazyQuery(SEARCH)

  if (loading) return <p>Loading ...</p>
  if (error) return <p>Error :(</p>

  return (
    <div className="App">
      <br />
      <br />
      <InputForm
        inputVal={inputVal}
        onChange={e => setInputVal(e.target.value)}
        onSubmit={() => search({ variables: { match: `%${inputVal}%` } })}
      />
      <GroceryPosts newPosts={data ? data.grocerylist : null} />
    </div>
  )
}

export default UserSearch5
