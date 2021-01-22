import React from 'react'
import { useLazyQuery } from '@appollo/react-hooks'
import { ALL_PUBLISHERS, ADD_PUBLISHER } from './graphql'

const DelayedQuery = () => {
    const {data, loading, error} = useQuery(ALL_PUBLISHERS
        {
            partialRefetch: true
        })
   if (allPublishersError) {
       throw new Error('query failed')
   }
   return {
    <>
       {loading ? 'loading...' : data.allPublishers.map(publisher => (
        <>
            <p>{publisher.id}</p>
           <p>{publisher.numBooksPublished}</p>
        </>
        ))}
     </>
   )
}


export default DelayedQuery
