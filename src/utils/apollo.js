
import React from 'react';
import { ApolloLink, ApolloClient, InMemoryCache, ApolloProvider, split, HttpLink } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from '@apollo/client/link/ws';
//import { SubscriptionClient } from 'subscriptions-transport-ws'
import fetch from "isomorphic-fetch";
import ws from "ws"
import {IdentityProvider, netlifyIdentity} from '../../identity-context';
//import netlifyIdentity from '../..identity-context';

const cache = new InMemoryCache();

const httpLink = new HttpLink({
	cache: cache,
	uri: 'https://meet-whippet-78.hasura.app/v1/graphql',
	headers: {
    'x-hasura-admin-secret': `${process.env.HASURA_ADMIN_SECRET}`,
  },
	fetch,
})

const currentUser = netlifyIdentity.currentUser()
const token = currentUser ? currentUser.token.access_token : null

const wsForNode = typeof window === 'undefined' ? ws : null

// const wsClient = new SubscriptionClient("wss://hasura-heroku-based.herokuapp.com/v1/graphql", {
// 	reconnect: true,
// 	headers: {
//     'x-hasura-admin-secret': `${process.env.GATSBY_HASURA_GRAPHQL_ADMIN_SECRET}`,
//   },
// 	webSocketImpl: ws,
// });

const wsLink = new WebSocketLink({
	uri: 'wss://meet-whippet-78.hasura.app/v1/graphql',
	// headers: {
 //    'x-hasura-admin-secret': `${process.env.GATSBY_HASURA_GRAPHQL_ADMIN_SECRET}`,
 //  },
	webSocketImpl: wsForNode,
	options: {
		reconnect: true,
    connectionParams: () => ({
			headers: {
		    'x-hasura-admin-secret': `${process.env.HASURA_ADMIN_SECRET}`,
		  }
	  }),
	}
})

const middlewareLink = new ApolloLink((operation, forward) => {
    operation.setContext({
      headers: {
        authorization:
          `Bearer ${token}` || null,
      },
    })
    return forward(operation)
  })

const link = split(({ query }) => {
	const { kind, operation } = getMainDefinition(query);
    
	return kind === "OperationDefinition" && operation === "mutation";
}, wsLink, middlewareLink.concat(httpLink))

export const client = new ApolloClient({
	link,
	cache: cache,
});

export const wrapRootElement = ({element}) => {
    return (
      <ApolloProvider client={client}>
        <IdentityProvider>{element}</IdentityProvider>
      </ApolloProvider>
    )
}
