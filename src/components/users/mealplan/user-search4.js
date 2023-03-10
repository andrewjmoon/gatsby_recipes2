import React, { useState } from "react"
import { useLazyQuery } from "@apollo/client"
import gql from "graphql-tag"
import InputForm from "../shared/input-form"
import MealplanPosts from "./mealplanlist-posts"
//import GroceryList from "./grocerylist"

const SEARCH = gql`
  query Search($match: String) {
    mealplan(
      order_by: { title: asc }
      where: {
        _or: [{ category: { _ilike: $match } }, { title: { _ilike: $match } }]
      }
    ) {
      title
      content
      category
      id
    }
  }
`

const UserSearch4 = () => {
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
      <MealplanPosts newPosts={data ? data.mealplan : null} />
    </div>
  )
}

export default UserSearch4
