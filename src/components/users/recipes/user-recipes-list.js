import React from "react"
import { useQuery, gql } from "@apollo/client"
//import gql from "graphql-tag"
import * as Showdown from "showdown"
import {Grid, Paper, List, ListItem} from "@mui/material"
import { Link } from "@reach/router"
//import ReactHtmlParser from "react-html-parser"
//import DeletePost from "./delete-posts"

const GET_POSTS = gql`
  query getPosts($id: String!) {
    users_by_pk(id: $id) {
      id
      name
      recipes(order_by: { type: asc }) {
        title
        content
        id
        category
        type
        source
      }
    }
  }
`
/*
const GET_POSTS = gql`
  query getPosts($id: uuid!) {
    movie_by_pk(id: $id) {
      title
      content
      id
      category
      type
      source
      user {
        id
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

const converter = new Showdown.Converter()
const UserRecipeList = ({ id }) => {

  const { loading, error, data } = useQuery(GET_POSTS, { variables: { id } })

  if (loading) return <p>Loading ...</p>
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>

  const { recipes, name } = data.users_by_pk

  return (
    <div className="App">
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
      <br />
      <h3>{name}</h3>
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
                <ListItem justify="center" style={classes.root}>
                  <b>
                    <h4>Title: {post.title}</h4>
                  </b>
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
                    <h4> Source: {post.source}</h4>
                  </b>
                </ListItem>
              </List>
            </Grid>
          </Paper>
        ))}
      </ul>
    </div>
  )
}

export default UserRecipeList
