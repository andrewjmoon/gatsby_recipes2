import React from "react"
import { Mutation } from "react-apollo"
import { getPosts4, deletePosts4 } from "../../queries"

const DeleteGrocerylist = id => {
  return (
    <Mutation
      mutation={deletePosts4}
      refetchQueries={[{ query: getPosts4 }]}
      variables={{ id }}
    >
      {(delete_grocerylist, { data }) => (
        <span
          title="Delete Recipe"
          onClick={e => {
            delete_grocerylist({
              variables: id,
            })
          }}
        >
          <button>Remove</button>
        </span>
      )}
    </Mutation>
  )
}
export default DeleteGrocerylist


/*
import React from "react";
import { useMutation } from "@apollo/client";
import { getPosts4, deletePosts4 } from "../../queries";

const DeleteGrocerylist = ({ id }) => {
  const [delete_grocerylist, { data }] = useMutation(deletePosts4, {
    refetchQueries: [{ query: getPosts4 }],
  });

  return (
    <span
      title="Delete Recipe"
      onClick={(e) => {
        delete_grocerylist({
          variables: { id },
        });
      }}
    >
      <button>Remove</button>
    </span>
  );
};

export default DeleteGrocerylist;
*/