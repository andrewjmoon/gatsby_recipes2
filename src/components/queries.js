import { gql } from "@apollo/client"

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
        email
      }
    }
  }
`
const getPosts2 = gql`
  query getPosts2 {
    recipes2(order_by: { title: asc }) {
      title
      content
      id
      category
      type
      source
      user {
        email
      }
    }
  }
`
const getPosts3 = gql`
  query getPosts3 {
    mealplan(order_by: { title: asc }) {
      title
      content
      category
      id
    }
  }
`
const getPosts4 = gql`
  query getPosts4 {
    grocerylist(order_by: { title: asc }) {
      title
      content
      id
    }
  }
`
const getPosts5 = gql`
  query getPosts5 {
    deals(order_by: { created_at: asc }) {
      id
      title
      content
      created_at
    }
  }
`

const deletePosts = gql`
  mutation delete_posts($id: uuid) {
    delete_recipes(where: { id: { _eq: $id } }) {
      returning {
        id
      }
    }
  }
`
const deletePosts2 = gql`
  mutation delete_posts($id: uuid) {
    delete_recipes2(where: { id: { _eq: $id } }) {
      returning {
        id
      }
    }
  }
`
const deletePosts3 = gql`
  mutation delete_posts($id: uuid) {
    delete_mealplan(where: { id: { _eq: $id } }) {
      returning {
        id
      }
    }
  }
`
const deletePosts4 = gql`
  mutation delete_posts($id: uuid) {
    delete_grocerylist(where: { id: { _eq: $id } }) {
      returning {
        id
      }
    }
  }
`
const deletePosts5 = gql`
  mutation delete_posts($id: uuid) {
    delete_deals(where: { id: { _eq: $id } }) {
      returning {
        id
      }
    }
  }
`

export {
  getPosts,
  getPosts2,
  getPosts3,
  getPosts4,
  getPosts5,
  deletePosts,
  deletePosts2,
  deletePosts3,
  deletePosts4,
  deletePosts5,
}
