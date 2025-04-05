import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'

function Layout() {
  return (
    <AppBar position='sticky'>
       <Toolbar>
          <Typography component="h1" variant='h5' fontWeight="bol">
                 وبلاگ گادفادر
          </Typography>
       </Toolbar>
    </AppBar>
  )
}

export default Layout