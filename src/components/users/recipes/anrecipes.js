import React from "react"
import { useQuery } from "@apollo/client"
import gql from "graphql-tag"
//import * as Showdown from "showdown"
import {List, ListItem} from "@mui/material"
import { Link } from "@reach/router"
//import ReactHtmlParser from "react-html-parser"
//import DeletePost from "./delete-posts"

const GET_POSTS = gql`
  query getPosts {
    recipes(order_by: { type: asc }) {
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
const classes = {
  root: {
      flexGrow: 1,
      overflow: 'hidden',
      justifyContent: 'center',
      textAlign: 'center',
      display: 'block',  
  }
}

//const converter = new Showdown.Converter()
const AnRecipeList = ({ newPosts }) => {

  const { loading, error, data } = useQuery(GET_POSTS, {
    fetchPolicy: "no-cache",
  })

  const renderPosts = recipes => {
    return (
      <ul>
        {recipes.map(post => (
          <List style={classes.root} key={post.id}>
            <ListItem variant="h2" justify="center" style={classes.root}>
              <Link className="Link" to={`/user/anrecipes/${post.id}`}>
                {post.title}-{post.type}-{post.category}-{post.user.name}
              </Link>
            </ListItem>
          </List>
        ))}
      </ul>
    )
  }
  if (loading) return <p>Loading ...</p>
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>
  return (
    <div className="App">
      <div>
        <Link className="Link" to="/user/list-reviews">
          List/Reviews
        </Link>
        <br />
        <br />
        <Link className="Link" to="/user/authorized/recipe-dashboard">
          Public Recipe Home
        </Link>
        <br />
        <b>{renderPosts(newPosts || data.recipes)}</b>
      </div>
    </div>
  )
}

export default AnRecipeList
