import React, { useState } from "react"
import { useLazyQuery } from "@apollo/client"
import gql from "graphql-tag"
import InputForm from "../shared/input-form"
import PrivateRecipePosts from "./privaterecipe-posts"

const SEARCH = gql`
  query Search($match: String) {
    recipes2(
      order_by: { type: asc }
      where: {
        _or: [
          { category: { _ilike: $match } }
          { title: { _ilike: $match } }
          { type: { _ilike: $match } }
          { user: { name: { _ilike: $match } } }
        ]
      }
    ) {
      title
      content
      category
      id
      type
      source
      user {
        name
      }
    }
  }
`

const UserSearch3 = () => {
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
      <PrivateRecipePosts newPosts={data ? data.recipes2 : null} />
    </div>
  )
}

export default UserSearch3
