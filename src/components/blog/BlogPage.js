import React from 'react'

import { useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'

import { GET_BLOG_INFO } from '../../graphql/Queries'
import Loader from '../shared/Loader'

function BlogPage() {
    const { slug } = useParams()

    const {loading, data, error} = useQuery(GET_BLOG_INFO, {
      variables: {
        slug
      }
    })
    
    if (loading) return <Loader />
  
    if (error) return <h3> an error occured </h3>

    console.log(data)
  return (
    <div>BlogPage</div>
  )
}

export default BlogPage