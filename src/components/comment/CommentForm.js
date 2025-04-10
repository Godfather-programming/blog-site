import React, { useState } from "react";

import { Button, Grid, TextField, Typography } from "@mui/material";
import { useMutation } from "@apollo/client";
import { Bounce, ToastContainer, toast } from "react-toastify";

import { SEND_COMMENT } from "../../graphql/Mutations";

function CommentForm({ slug }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const [sendComment, { loading, data, error }] = useMutation(SEND_COMMENT, {
    variables: {
      name,
      email,
      text,
      slug,
    },
  });

  console.log(data);

  const sendHnadler = () => {
    if (name && email && text) {
      sendComment();
    } else {
      toast.warn("please fill all of the fields", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  if(data) {
    toast.success("the comment has been sent and is waited for connfirm", {position: "top-center"})
  }
  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba(0,0,0, 0.1) 0px 4px 12px",
        borderRadius: 4,
        py: 1,
        mt: 5,
      }}
    >
      <Grid size={{ xs: 12 }} m={2}>
        <Typography component="p" variant="h6" fontWeight={700} color="primary">
          ارسال کامنت
        </Typography>
      </Grid>
      <Grid size={{ xs: 12 }} m={2}>
        <TextField
          label="نام کاربری"
          variant="outlined"
          sx={{ width: "100%" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Grid>
      <Grid size={{ xs: 12 }} m={2}>
        <TextField
          label="ایمیل"
          variant="outlined"
          sx={{ width: "100%" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Grid>{" "}
      <Grid size={{ xs: 12 }} m={2}>
        <TextField
          label="متن کامنت"
          variant="outlined"
          sx={{ width: "100%" }}
          value={text}
          onChange={(e) => setText(e.target.value)}
          multiline
          minRows={4}
        />
      </Grid>
      <Grid size={{ xs: 12 }} m={2}>
        {loading ? (
          <Button variant="contained" disabled> در حال ارسال ... </Button>
        ) : (
          <Button variant="contained" onClick={sendHnadler}>
            ارسال
          </Button>
        )}
      </Grid>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </Grid>
  );
}

export default CommentForm;
