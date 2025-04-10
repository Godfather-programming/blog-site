import React from 'react'

import { useQuery } from '@apollo/client'
import { useNavigate, useParams } from 'react-router-dom'
import { Avatar, Box, Container, Grid, Typography } from '@mui/material'
import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';

import { GET_BLOG_INFO } from '../../graphql/Queries'
import Loader from '../shared/Loader'
import sanitize from 'sanitize-html';
import CommentForm from '../comment/CommentForm';
import Comments from '../comment/Comments';

function BlogPage() {
    const { slug } = useParams()
    const navigate = useNavigate()

    const {loading, data, error} = useQuery(GET_BLOG_INFO, {
      variables: {
        slug
      }
    })
    
    if (loading) return <Loader />
  
    if (error) return <h3> an error occured </h3>

    console.log(data)
    const { post : { author, title, coverPhoto, content, slugg }  } = data
    // const { author, title, coverPhoto, content } 
  return (
    <Container maxWidth="lg">
         <Grid container> 
             <Grid size={{xs:12}} mt={9} display="flex" justifyContent="space-between"> 
                 <Typography component="h2" variant='h4' color='primary' fontWeight="700">
                         {title}
                 </Typography> 
                 <ArrowBackTwoToneIcon onClick={() => navigate(-1)}/>
             </Grid> 
             <Grid size={{xs:12}} mt={6}> 
                <img src={coverPhoto.url} alt={slugg} width="100%" height="500px" style={{ borderRadius:15 }}/>
             </Grid>
             <Grid size={{xs: 12}} mt={7} display="flex" alignItems="center"> 
                <Avatar src={author.avatar.url} sx={{width: 80, height: 80, marginLeft:2}}/>
               <Box component="div">
               <Typography component='p' variant='h5' fontWeight={700}> {author.name} </Typography>
                <Typography component='p' variant='p' color="textSecondary">
                  {author.field}
                </Typography>
               </Box>
             </Grid>
             <Grid size={{xs: 12}} mt={5}>
                <div dangerouslySetInnerHTML={{__html:sanitize(content.html)}}></div>
             </Grid>
             <Grid size={{xs:12}}> 
                 <CommentForm slug={slug}/>
             </Grid>
             <Grid size={{xs:12}}>
                  <Comments slug={slug}/>
             </Grid>
         </Grid> 
    </Container>
  )
}

export default BlogPage