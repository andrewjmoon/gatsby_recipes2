import React from "react"
//import { Mutation } from "react-apollo"
import { useMutation, useQuery } from "@apollo/client"
import { getPosts2, deletePosts2 } from "../../queries"

const DeleteRecipe2 = id => {
  const { loading, error, data } = useQuery(getPosts2)
  const [delete_recipes2] = useMutation(deletePosts2, {
    fetchPolicy: "no-cache",
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <div>
      <span
        title="Delete Recipe"
        onClick={async () => {
          await delete_recipes2({
            variables: id,
            refetchQueries: [{ query: getPosts2, variables: { id } }],
            awaitRefetchQueries: true,
          })
        }}
      >
        <button>Remove</button>
      </span>
    </div>
  )
}
export default DeleteRecipe2

/*
return (
    <Mutation
      mutation={deletePosts3}
      refetchQueries={[{ query: getPosts3 }]}
      variables={{ id }}
    >
      {(delete_mealplan, { data }) => (
        <span
          title="Delete Recipe"
          onClick={e => {
            delete_mealplan({
              variables: id,
            })
          }}
        >
          <button>Remove</button>
        </span>
      )}
    </Mutation>
    */
