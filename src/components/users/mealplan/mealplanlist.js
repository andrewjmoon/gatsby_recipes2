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
    mealplan(order_by: { title: asc }) {
      title
      content
      id
      category
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
const MealplanList = ({ newPosts }) => {

  const { loading, error, data } = useQuery(GET_POSTS, {
    fetchPolicy: "no-cache",
  })

  const renderPosts = mealplan => {
    return (
      <ul>
        {mealplan.map(post => (
          <List style={classes.root} key={post.id}>
            <ListItem variant="h2" justify="center" style={classes.root}>
              <Link
                className="Link"
                to={`/user/authorized/mealplan/${post.id}`}
              >
                <b>{post.title}-{post.category}</b>
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
        <Link className="Link" to="/user/authorized/user-dashboard">
          User Home
        </Link>
        <br />
        <br />
        <Link className="Link" to="/user/authorized/mealplan-dashboard">
          Mealplan Home
        </Link>
        <br />
        <>{renderPosts(newPosts || data.mealplan)}</>
      </div>
    </div>
  )
}

export default MealplanList
