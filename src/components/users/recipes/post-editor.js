import React, { useState } from "react"
import { useMutation, gql } from "@apollo/client"
//import gql from "graphql-tag"
import * as Showdown from "showdown"
import ReactMde from "react-mde"
import "react-mde/lib/styles/css/react-mde-all.css"
import { getPosts } from "../../queries"

const ADD_RECIPE = gql`
  mutation insert_recipes(
    $title: String!
    $content: String!
    $category: String!
    $type: String!
    $source: String!
  ) {
    insert_recipes(
      objects: [
        {
          title: $title
          content: $content
          category: $category
          type: $type
          source: $source
        }
      ]
    ) {
      returning {
        title
        category
        content
        type
        source
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

const PostEditor = () => {
  const [post, setPost] = useState({
    title: "",
    content: "",
    category: "",
    type: "",
    source: "",
  })
  const [addPost, { data }] = useMutation(ADD_RECIPE, {
    refetchQueries: [{ query: getPosts }],
    awaitRefetchQueries: true,
  })
  const [selectedTab, setSelectedTab] = useState("write")

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        addPost({ variables: post })
        setPost({ title: "", content: "", category: "", type: "", source: "" })
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
          placeholder="Recipe Title"
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
        <b>Types: Appetizer, Breakfast, Dessert, Sidedish, and Maindish</b>
        <br />
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="post-type"
        >
          Type
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="post-type"
          type="text"
          placeholder="Type"
          onChange={e =>
            setPost({
              ...post,
              type: e.target.value,
            })
          }
          defaultValue={post.type}
          value={post.type}
        />
        <br />
        <br />
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="post-category"
          aria-label="Category"
        >
          Category
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="post-category"
          type="text"
          placeholder="Category"
          onChange={e =>
            setPost({
              ...post,
              category: e.target.value,
            })
          }
          defaultValue={post.category}
          value={post.category}
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
        <br />
        <br />
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="post-category"
          aria-label="Source"
        >
          Source
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="post-source"
          type="text"
          placeholder="Source"
          onChange={e =>
            setPost({
              ...post,
              source: e.target.value,
            })
          }
          defaultValue={post.source}
          value={post.source}
        />
      </div>
      <br />
      <button className="btn">Save</button>
    </form>
  )
}

export default PostEditor
