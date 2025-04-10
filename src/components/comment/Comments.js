import React from "react";

import { useQuery } from "@apollo/client";
import { GET_BLOG_COMMENTS } from "../../graphql/Queries";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import Loader from "../shared/Loader";

function Comments({ slug }) {
  const { loading, data, error } = useQuery(GET_BLOG_COMMENTS, {
    variables: {
      slug,
    },
  });

  if (loading) return <Loader />;
  if (error) return <h3> an error occured </h3>;
  console.log(data);

  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba(0, 0, 0, 0.1) 0 4px 12px",
        borderRadius: 4,
        py: 1,
        mt: 5,
      }}
    >
      <Grid size={{ xs: 12 }} m={2}>
        <Typography component="p" variant="h6" fontWeight={700} color="primary">
          کامنت ها
        </Typography>
        <Grid container spacing={2}>
          {data.comments.map((comment) => (
            <Grid
              size={{ xs: 12 }}
              p={2}
              border="2px solid silver"
              borderRadius={1}
              m={2}
              key={comment.id}
            >
              <Box component="div" display="flex" alignItems="center" mb={3}>
                <Avatar> {comment.name[0]} </Avatar>
                <Typography
                  component="span"
                  variant="p"
                  fontWeight={700}
                  marginRight={1}
                >
                  {comment.name}
                </Typography>
              </Box>
              <Typography component="p" variant="p">
                {comment.text}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Comments;

{
  /* <Box component="div" style={{display: "flex", alignItems: "center"}}>
<span style={{width:"25px", height: "25px", backgroundColor:"gray", display:"block", borderRadius: "50%"}}> </span>
<span style={{marginRight:"16px"}}> {comment.name} </span>
</Box>
<Typography component="p" variant="h6" m={2}>
   {comment.text}
</Typography> */
}
