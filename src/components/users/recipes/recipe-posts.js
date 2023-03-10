import React from "react"
import { useQuery, gql } from "@apollo/client"
//import gql from "graphql-tag"
import * as Showdown from "showdown"
import {Grid, Paper, List, ListItem} from "@mui/material"
import { Link } from "@reach/router"
import DeleteRecipe from "./delete-recipe"
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

const converter = new Showdown.Converter()
const RecipePosts = ({ newPosts }) => {

  const { loading, error, data } = useQuery(GET_POSTS, {
    
  })

  const renderPosts = recipes => {
    return (
      <ul>
        {recipes.map(post => (
          <Paper
            key={post.id}
            direction="column"
            justify="center"
            sx={{
              margin: `30px`,
              padding: '10px',
              backgroundColor: 'lightcyan',
              flexGrow: 1,
              justify: 'center',
              justifyContent: "center",
              alignItems: "center",
              fontWeight: 'bold',
              
        }}
          >
            <Grid
              container
              spacing={0}
              direction="column"
              style={classes.root}
            >
              <List style={classes.root} key={post.id}>
                <ListItem
                  variant="h2"
                  justify="center"
                  style={classes.root}
                >
                  <h3>
                    {post.title}
                    <span className="text-xs"> by {post.user.name}</span>
                  </h3>
                </ListItem>

                <ListItem justify="center" style={classes.root}>
                  <b>
                    <h4>Type: {post.type}</h4>
                  </b>
                </ListItem>
                <ListItem justify="center" style={classes.root}>
                  <b>
                    <h4>Category: {post.category}</h4>
                  </b>
                </ListItem>

                <ListItem justify="center" style={classes.root}>
                  <b>Content: </b>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: converter.makeHtml(post.content),
                    }}
                  />
                </ListItem>
                <ListItem justify="center" style={classes.root}>
                  <b>
                    <h4>Source: {post.source}</h4>
                  </b>
                </ListItem>
                <ListItem justify="center" style={classes.root}>
                  <DeleteRecipe id={post.id} />
                </ListItem>
              </List>
            </Grid>
          </Paper>
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
        <Link className="Link" to="/user/authorized/recipe-dashboard">
          Public Recipe Home
        </Link>
        <br />
        <br />
        <>{renderPosts(newPosts || data.recipes)}</>
      </div>
    </div>
  )
}

export default RecipePosts
