import React from "react"
import { useMutation, useQuery } from "@apollo/client"
import "react-mde/lib/styles/css/react-mde-all.css"
//import { updateContent } from "../../queries"
import gql from "graphql-tag"
import { Link } from "@reach/router"

const getPosts = gql`
  query getPosts {
    recipes(order_by: { title: asc }) {
      title
      content
      id
      category
      type
      source
      user {
        name
      }
    }
  }
`
const updateContent = gql`
  mutation updateContent($id: uuid, $content: String) {
    update_recipes(where: { id: { _eq: $id } }, _set: { content: $content }) {
      affected_rows
      returning {
        id
        content
      }
    }
  }
`

//const onChangeTab = value => console.log("TAB CHANGED:", value)

export default function UpdateContent() {
  //const onChangeValue = post => ("VALUE CHANGED:", post)
  const { loading, error, data } = useQuery(getPosts)
  const [updateTodo] = useMutation(updateContent, {
    fetchPolicy: "no-cache",
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return data.recipes.map(({ id, content, title, user }) => {
    let input

    return (
      <div key={id} className="App">
        <Link className="Link" to="/user/authorized/recipe-dashboard">
          Public Recipe Home
        </Link>
        <br />
        <br />
        <h2>
          {title} by {user.name}
        </h2>
        {content}
        <form
          onSubmit={e => {
            e.preventDefault()
            updateTodo({
              variables: {
                id,
                content: input.value,
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
          <button type="submit">Update Content</button>
        </form>
      </div>
    )
  })
}
