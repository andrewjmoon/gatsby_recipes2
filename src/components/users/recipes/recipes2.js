import React from "react"
import { useQuery } from "@apollo/client"
import gql from "graphql-tag"
import * as Showdown from "showdown"
import {Grid, Paper, List, ListItem} from "@mui/material"
import { Link } from "@reach/router"
//import ReactHtmlParser from "react-html-parser"
//import DeletePost from "./delete-posts"

const GET_POSTS = gql`
  query getPosts($id: uuid!) {
    recipes_by_pk(id: $id) {
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
const RecipeList2 = ({ id }) => {

  const { loading, error, data } = useQuery(
    GET_POSTS,
    { variables: { id } },
    {
      fetchPolicy: "no-cache",
    }
  )

  if (loading) return <p>Loading ...</p>
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>

  const { type, title, content, category, source } = data.recipes_by_pk

  return (
    <div className="App">
      <br />
      <Link className="Link" to="/user/authorized/recipe-dashboard">
        Recipe Home
      </Link>
      <br />
      <br />
      <Link className="Link" to="/user/authorized/recipe-list">
        Recipe List
      </Link>
      <br />
      <ul>
        <Paper
          key={id}
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
            <List style={classes.root} key={id}>
              <ListItem justify="center" style={classes.root}>
                <b>
                  <h4>Title: {title}</h4>
                </b>
              </ListItem>
              <ListItem justify="center" style={classes.root}>
                <b>
                  <h4>Type: {type}</h4>
                </b>
              </ListItem>
              <ListItem justify="center" style={classes.root}>
                <b>
                  <h4>Category: {category}</h4>
                </b>
              </ListItem>

              <ListItem justify="center" style={classes.root}>
                <b>Content: </b>
                <div
                  dangerouslySetInnerHTML={{
                    __html: converter.makeHtml(content),
                  }}
                />
              </ListItem>
              <ListItem justify="center" style={classes.root}>
                <b>
                  <h4> Source: {source}</h4>
                </b>
              </ListItem>
            </List>
          </Grid>
        </Paper>
      </ul>
    </div>
  )
}

export default RecipeList2

/*
<div>
        <Link className="Link" to="/user/authorized/user-dashboard">
          User Home
        </Link>
        <br />
        <Link className="Link" to="/user/authorized/recipe-dashboard">
          recipe Home
        </Link>
        <br />
        <h3>
          {id}, {title}, {content}, {category}
        </h3>
        <List>
          {users.map(user => (
            <ListItem key={user.id}>{user.title}</ListItem>
          ))}
        </List>
      </div>
      */
