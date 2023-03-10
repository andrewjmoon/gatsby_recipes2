import React from "react"
import { useQuery } from "@apollo/client"
import gql from "graphql-tag"
import * as Showdown from "showdown"
import {Grid, Paper, List, ListItem} from "@mui/material"
import { Link } from "@reach/router"
import DeleteMealplan from "./delete-mealplan"
//import ReactHtmlParser from "react-html-parser"
//import DeletePost from "./delete-posts"

const GET_POSTS = gql`
  query getPosts {
    mealplan(order_by: { title: asc }) {
      title
      content
      category
      id
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
const MealplanPosts = ({ newPosts }) => {

  const { loading, error, data } = useQuery(GET_POSTS, {
    fetchPolicy: "cache-and-network",
  })

  const renderPosts = mealplan => {
    return (
      <ul>
        {mealplan.map(post => (
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
                  <h3>{post.title}</h3>
                </ListItem>
                <ListItem
                  variant="h2"
                  justify="center"
                  style={classes.root}
                >
                  <h3>{post.category}</h3>
                </ListItem>

                <ListItem justify="center" style={classes.root}>
                  <>
                    <b>Content: </b>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: converter.makeHtml(post.content),
                      }}
                    />
                  </>
                </ListItem>
                <ListItem justify="center" style={classes.root}>
                  <DeleteMealplan id={post.id} />
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
        <Link className="Link" to="/user/authorized/mealplan-dashboard">
          Mealplan Home
        </Link>
        <br />
        <br />
        <b>{renderPosts(newPosts || data.mealplan)}</b>
      </div>
    </div>
  )
}

export default MealplanPosts
