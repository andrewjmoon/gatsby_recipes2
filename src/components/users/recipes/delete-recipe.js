import React from "react"
//import { Mutation } from "react-apollo"
import { useMutation, useQuery } from "@apollo/client"
import { getPosts, deletePosts } from "../../queries"

const DeleteRecipe = id => {
  const { loading, error, data } = useQuery(getPosts)
  const [delete_recipes] = useMutation(deletePosts, {
    fetchPolicy: "no-cache",
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <div>
      <span
        title="Delete Recipe"
        onClick={async () => {
          await delete_recipes({
            variables: id,
            refetchQueries: [{ query: getPosts, variables: { id } }],
            awaitRefetchQueries: true,
          })
        }}
      >
        <button>Remove</button>
      </span>
    </div>
  )
}
export default DeleteRecipe

/*
<Mutation mutation={deletePosts} fetchPolicy="no-cache">
      {(delete_recipes, { data }) => (
        <span
          title="Delete Recipe"
          onClick={e => {
            delete_recipes({
              variables: id,
              refetchQueries: () => [{ query: getPosts }],
              awaitRefetchQueries: true,
            })
          }}
        >
          <button>Remove</button>
        </span>
      )}
    </Mutation>
  )
  */

/*
   <div>
      <span
        title="Delete Recipe"
        onClick={async () => {
          await delete_recipes({
            variables: id,
            refetchQueries: [{ query: getPosts }],
            awaitRefetchQueries: true,
          })
        }}
      >
        <button>Remove</button>
      </span>
    </div>
    */
