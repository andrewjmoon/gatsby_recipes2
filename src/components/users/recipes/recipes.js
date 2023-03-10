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
const RecipeList = ({ newPosts }) => {

  const { loading, error, data } = useQuery(GET_POSTS, {
    fetchPolicy: "no-cache",
  })

  const renderPosts = recipes => {
    return (
      <ul>
        {recipes.map(post => (
          <List style={classes.root} key={post.id}>
            <ListItem variant="h2" justify="center" style={classes.root}>
              <Link className="Link" to={`/user/authorized/recipes/${post.id}`}>
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
        <Link className="Link" to="/user/authorized/user-dashboard">
          User Home
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

export default RecipeList
/*
import React from "react"
import { useQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"
import * as Showdown from "showdown"
import { makeStyles } from "@material-ui/core/styles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import { Link } from "@reach/router"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
//import ReactHtmlParser from "react-html-parser"
//import DeletePost from "./delete-posts"

const GET_POSTS = gql`
  query getPosts {
    recipes_by_pk(order_by: { created_at: desc }) {
      title
      content
      id
      category
      type
      user {
        name
      }
    }
  }
`
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    justifyContent: "center",
    textAlign: "center",
    display: "block",
  },
  paper: {
    maxWidth: 800,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
    backgroundColor: "lightblue",
    alignItems: "center",
    justify: "center",
  },
}))

const converter = new Showdown.Converter()
const recipesList = ({ newPosts }) => {
  const classes = useStyles()

  const { loading, error, data } = useQuery(GET_POSTS, { pollInterval: 10000 }, {variables: {id}})

  const { name, cuisine, reviews } = data.recipes_by_pk;

  const renderPosts = recipes => {
    return (
      <ul>
        {recipes.map(post => (
          <Paper
            key={post.id}
            direction="column"
            justify="center"
            className={classes.paper}
          >
            <Grid
              container
              spacing={0}
              direction="column"
              className={classes.root}
            >
              <List className={classes.root} key={post.id}>
                <ListItem
                  variant="h2"
                  justify="center"
                  className={classes.root}
                >
                  <h3>
                    {post.title}
                    <span className="text-xs"> by {post.user.name}</span>
                  </h3>
                </ListItem>
                
                <ListItem justify="center" className={classes.root}>
                  <b>
                    <h4>Type: {post.type}</h4>
                  </b>
                </ListItem>
                <ListItem justify="center" className={classes.root}>
                  <b>
                    <h4>Category: {post.category}</h4>
                  </b>
                </ListItem>
                <ListItem justify="center" className={classes.root}>
                  Content:{" "}
                  <div
                    dangerouslySetInnerHTML={{
                      __html: converter.makeHtml(post.content),
                    }}
                  />
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
        <Link className="Link" to="/user/authorized/recipes-dashboard">
          recipes Home
        </Link>
        <br />
        <>{renderPosts(newPosts || data.recipes)}</>
      </div>
    </div>
  )
}

export default recipesList
*/
