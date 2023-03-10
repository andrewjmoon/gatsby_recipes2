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
    users(order_by: { name: asc }) {
      name
      id
    }
  }
`
/*
const GET_POSTS = gql`
  query getPosts {
    movie(order_by: { created_at: desc }) {
      title
      content
      id
      category
      type
      rating
      user {
        name
      }
    }
  }
`
*/
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
const RecipeUser = ({ newPosts }) => {

  const { loading, error, data } = useQuery(GET_POSTS)

  const renderPosts = users => {
    return (
      <ul className="App">
        {users.map(post => (
          <List style={classes.root} key={post.id}>
            <ListItem variant="h2" justify="center" style={classes.root}>
              <Link className="Link" to={`/user/recipe-users-lists/${post.id}`}>
                {post.name}
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
        <br />
        <Link className="Link" to="/user/recipe-user">
          Recipe Users
        </Link>
        <br />
        <br />
        <Link className="Link" to="/user/user-search2">
          Recipe List
        </Link>
        <br />
        <hr />
        <>{renderPosts(newPosts || data.users)}</>
      </div>
    </div>
  )
}

export default RecipeUser
