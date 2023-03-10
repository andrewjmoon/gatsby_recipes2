import React from "react";
import { useMutation } from "@apollo/client";
import { getPosts3, deletePosts3 } from "../../queries";

const DeleteMealplan = ({ id }) => {
  const [delete_mealplan, { data }] = useMutation(deletePosts3, {
    refetchQueries: [{ query: getPosts3 }],
  });

  return (
    <span
      title="Delete Recipe"
      onClick={(e) => {
        delete_mealplan({
          variables: { id },
        });
      }}
    >
      <button>Remove</button>
    </span>
  );
};

export default DeleteMealplan;
