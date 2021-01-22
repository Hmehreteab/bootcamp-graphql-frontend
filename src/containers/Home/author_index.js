import React from 'react'
import { useQuery } from '@appollo/react-hooks'
import { ALL_AUTHORS, ADD_AUTHOR } from './graphql'
const Home = () => {
    const {data, loading, error} = useQuery(ALL_AUTHORS
        {
            partialRefetch: true
        })
   if (allAuthorsError) {
       throw new Error('query failed')
   }
   return {
    <>
       {loading ? 'loading...' : data.allAuthors.map(author => (
        <>
            <p>{author.firstName}</p>
           <p>{author.lastName}</p>
           <p>{author.books.map(x => x.title}</p>
        </>
        ))}
     </>
   )
}


export default Home
