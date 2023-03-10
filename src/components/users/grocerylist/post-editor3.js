import React, { useState } from "react"
import { useMutation, gql } from "@apollo/client"
//import gql from "graphql-tag"
import * as Showdown from "showdown"
import ReactMde from "react-mde"
import "react-mde/lib/styles/css/react-mde-all.css"
import { getPosts4 } from "../../queries"

const ADD_RECIPE = gql`
  mutation addSidedish($title: String!, $content: String!) {
    insert_grocerylist(objects: [{ title: $title, content: $content }]) {
      returning {
        title
        content
      }
    }
  }
`
/*
const GET_POSTS = gql`
  query getPosts {
    posts(order_by: { created_at: desc }) {
      title
      content
      id
    }
  }
`
*/
const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true,
})

const PostEditor3 = () => {
  const [post, setPost] = useState({
    title: "",
    content: "",
  })
  const [addPost, { data }] = useMutation(ADD_RECIPE, {
    refetchQueries: [{ query: getPosts4 }],
    awaitRefetchQueries: true,
  })

  const [selectedTab, setSelectedTab] = useState("write")

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        addPost({ variables: post })
        setPost({ title: "", content: "" })
      }}
    >
      <div className="w-full mb-6 md:mb-0">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="post-title"
        >
          Title
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          aria-label="Sidedish"
          id="post-title"
          type="text"
          placeholder="Grocerylist"
          onChange={e =>
            setPost({
              ...post,
              title: e.target.value,
            })
          }
          defaultValue={post.title}
          value={post.title}
        />
        <br />
        <br />
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="post-content"
        >
          Content
        </label>
        <div className="container">
          <ReactMde
            value={post.content}
            onChange={value => {
              setPost({
                ...post,
                content: value,
              })
            }}
            selectedTab={selectedTab}
            onTabChange={setSelectedTab}
            generateMarkdownPreview={markdown =>
              Promise.resolve(converter.makeHtml(markdown))
            }
          />
        </div>
      </div>
      <br />
      <button className="btn">Save</button>
    </form>
  )
}

export default PostEditor3
