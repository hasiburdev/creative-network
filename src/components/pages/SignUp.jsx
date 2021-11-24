import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import Appbar from "../utils/Appbar";
import image from "../../assets/images/login_bannar.jpg";
import FormImage from "../utils/FormImage";
import SignUpForm from "../Form/SignUp";

const SignUp = () => {
  return (
    <>
      <Appbar />
      <Container>
        <Grid container spacing={4}>
          <Grid item md={8}>
            <FormImage image={image} />
          </Grid>
          <Grid item md={4} sx={{ height: "100vh", display: "grid" }}>
            <SignUpForm />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default SignUp;
