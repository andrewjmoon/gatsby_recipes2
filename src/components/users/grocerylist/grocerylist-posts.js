import React from "react"
import { useQuery } from "@apollo/client"
import gql from "graphql-tag"
import * as Showdown from "showdown"
import {Grid, Paper, List, ListItem} from "@mui/material"
import { Link } from "@reach/router"
import DeleteGrocerylist from "./delete-grocerylist"
//import ReactHtmlParser from "react-html-parser"
//import DeletePost from "./delete-posts"

const GET_POSTS = gql`
  query getPosts {
    grocerylist(order_by: { title: asc }) {
      title
      content
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
const GroceryPosts = ({ newPosts }) => {

  const { loading, error, data } = useQuery(GET_POSTS, {
    fetchPolicy: "cache-and-network",
  })

  const renderPosts = grocerylist => {
    return (
      <ul>
        {grocerylist.map(post => (
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
              <List styles={classes.root} key={post.id}>
                <ListItem
                  variant="h2"
                  justify="center"
                  style={classes.root}
                >
                  <h3>{post.title}</h3>
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
                <ListItem
                  variant="h2"
                  justify="center"
                  style={classes.root}
                >
                  <DeleteGrocerylist id={post.id} />
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
        <Link className="Link" to="/user/authorized/grocerylist-dashboard">
          Grocerylist Home
        </Link>
        <br />
        <br />
        <>{renderPosts(newPosts || data.grocerylist)}</>
      </div>
    </div>
  )
}

export default GroceryPosts
