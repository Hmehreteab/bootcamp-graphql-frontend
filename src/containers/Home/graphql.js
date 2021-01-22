import gql from 'graphql-tag'

const GET_AUTHOR = gql
 	query author($id: ID!) {
    author(id: $id) {
        id
        firstName
        lastName
    }
}

const GET_PUBLISHER = gql
 	query publisher($id: ID!) {
    publisher(id: $id) {
        id
        numBooksPublished
    }
}


export default GET_USER