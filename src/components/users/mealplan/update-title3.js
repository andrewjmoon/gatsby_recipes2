import React from "react"
import { useMutation, useQuery } from "@apollo/client"
import "react-mde/lib/styles/css/react-mde-all.css"
//import { updateContent } from "../../queries"
import gql from "graphql-tag"
import { Link } from "@reach/router"

const getPosts = gql`
  query getPosts {
    mealplan(order_by: { title: asc }) {
      title
      content
      id
      category
    }
  }
`
const updateTitles = gql`
  mutation updateTitles($id: uuid, $title: String) {
    update_mealplan(where: { id: { _eq: $id } }, _set: { title: $title }) {
      affected_rows
      returning {
        id
        title
      }
    }
  }
`

//const onChangeTab = value => console.log("TAB CHANGED:", value)

export default function UpdateTitle3() {
  //const onChangeValue = post => ("VALUE CHANGED:", post)
  const { loading, error, data } = useQuery(getPosts)
  const [updateTodo] = useMutation(updateTitles, {
    fetchPolicy: "no-cache",
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return data.mealplan.map(({ id, title }) => {
    let input

    return (
      <div key={id} className="App">
        <Link className="Link" to="/user/authorized/mealplan-dashboard">
          Mealplan Home
        </Link>
        <br />
        <br />
        <h2>{title}</h2>
        {title}
        <form
          onSubmit={e => {
            e.preventDefault()
            updateTodo({
              variables: {
                id,
                title: input.value,
              },
              refetchQueries: [{ query: getPosts }],
            })

            input.value = " "
          }}
        >
          <textarea
            key={id}
            ref={node => {
              input = node
            }}
          />
          <br />
          <button type="submit">Update Title</button>
        </form>
      </div>
    )
  })
}
