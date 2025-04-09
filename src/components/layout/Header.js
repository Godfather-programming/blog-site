import { AppBar, Container, Toolbar, Typography } from '@mui/material'
import BookRoundedIcon from '@mui/icons-material/BookRounded';

import React from 'react'

function Header() {
  return (
    <AppBar position='sticky'>
     <Container maxWidth="lg">
     <Toolbar>
          <Typography component="h1" variant='h5' fontWeight="700" flex={1}>
                 وبلاگ گادفادر
          </Typography>
          <BookRoundedIcon/>
       </Toolbar>
     </Container>
    </AppBar>
  )
}

export default Header