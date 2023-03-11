/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it
const React = require('react')
const fetch = require('isomorphic-fetch');
const {IdentityProvider} = require('./identity-context')
const {netlifyIdentity} = require('./identity-context')
const {crossFetch, ApolloProvider, ApolloClient, InMemoryCache, HttpLink, ApolloLink  } = require('@apollo/client')


const cache = new InMemoryCache()

const httpLink = new HttpLink({
  uri: "https://meet-whippet-78.hasura.app/v1/graphql",
})

const currentUser = netlifyIdentity.currentUser()
const token = currentUser ? currentUser.token.access_token : null

// inject auth
const middlewareLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      authorization:
        `Bearer ${token}` || null,
    },
  })
  return forward(operation)
})

// use with apollo-client
const link = middlewareLink.concat(httpLink)

const client = new ApolloClient({
  fetch,
  link,
  cache,
})

exports.wrapRootElement = ({element}) => {
  return (
    <ApolloProvider client={client}>
      <IdentityProvider>{element}</IdentityProvider>
    </ApolloProvider>
  )
}
