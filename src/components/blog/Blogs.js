import React from 'react'

import { useQuery } from '@apollo/client'
import { Grid } from '@mui/material'

import { GET_BLOGS_INFO } from '../../graphql/Queries'
import CardEl from '../shared/CardEl'
import Loader from '../shared/Loader'

function Blogs() {
    const {loading, data, error} = useQuery(GET_BLOGS_INFO)
    console.log(data)
     if(loading) return <Loader />  
     if(error) return <h3> an error occured </h3>
  return (
    <Grid container spacing={2}> 
    {data.posts.map((post) => (
        <Grid size={{xs: 12, sm: 6, md: 4}} key={post.id}> 
            <CardEl {...post}/>
        </Grid>
    ))}
    </Grid>
  )
}

export default Blogs