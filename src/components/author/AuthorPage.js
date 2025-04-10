import React from 'react'

import { useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'
import { Avatar, Container, Grid, Typography } from '@mui/material'
import sanitizeHtml from 'sanitize-html'

import { GET_AUTHOR_INFO } from '../../graphql/Queries'
import CardEl from '../shared/CardEl'
import Loader from '../shared/Loader'

function AuthorPage() {
    const { slug } = useParams()
    const {loading, data, error} = useQuery(GET_AUTHOR_INFO, {
        variables: { slug }
    })
    if (loading) return <Loader />
  
    if (error) return <h3> an error occured </h3>
    console.log(data)
    const { author : {avatar, name , field, description, post}  } = data
  return (
    <Container maxWidth="lg">
      <Grid container mt={10}>
        <Grid size={{xs:12}} display="flex" flexDirection="column" alignItems="center" > 
          <Avatar src={avatar.url} sx={{width:200 , height:200}}/>
          <Typography component="h3" variant='h5' fontWeight="700" mt={4}>
            {name}
          </Typography>
          <Typography component="p" variant='h5' color='textSecondary' mt={2}>
            {field}
          </Typography>
        </Grid>
        
        <Grid size={{xs:12}} mt={5}>
          <div dangerouslySetInnerHTML={{__html: sanitizeHtml(description.html) }}></div>
        </Grid>
        
        <Grid size={{xs:12}} mt={6}> 
          <Typography component="h3" variant='h5' fontWeight="700"> Blogs of {name} </Typography>
           <Grid container spacing={2} mt={2}>
             {post.map( post => (
              <Grid size={{xs: 12, sm: 6, md: 4}} key={post.id}> 
                 <CardEl title={post.title} slug={post.slug} coverPhoto={post.coverPhoto}/> 
              </Grid>
             ) )} 
           </Grid>
        </Grid>

      </Grid>
    </Container>
  )
}

export default AuthorPage