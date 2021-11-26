import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Snackbar, Slide, Alert } from "@mui/material";

import { login } from "../../firebase/auth";
import { loginValidator } from "../../validator/formValidator";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isInvalid = loginValidator(email, password);
    if (isInvalid) {
      setErrorMsg(isInvalid);
      setTimeout(() => setErrorMsg(""), 2000);
      return;
    }

    try {
      const userCredentials = await login(email, password);
      setSuccessMsg("Successfully Logged In!");
      setTimeout(() => setSuccessMsg(""), 2000);

      console.log(userCredentials);
    } catch (error) {
      setErrorMsg(error.message);
      setTimeout(() => setErrorMsg(""), 2000);
      console.log(error);
    }
  };

  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "#009C86" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Creative Network
      </Typography>
      <Box component="form" sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          onClick={handleSubmit}
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2, bgcolor: "#009C86" }}
        >
          Log In
        </Button>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link
              href="/signup"
              variant="body2"
              sx={{ textDecoration: "none" }}
            >
              Don't have an account? Sign Up
            </Link>
            <br />
            <Link
              href="#"
              sx={{
                textAlign: "right",
                display: "block",
                textDecoration: "none",
              }}
              variant="body2"
            >
              Forgot Your Password?
            </Link>
          </Grid>
        </Grid>
      </Box>

      {errorMsg && (
        <Snackbar open={true} TransitionComponent={Slide}>
          <Alert severity="error" sx={{ width: "100%" }}>
            {errorMsg}
          </Alert>
        </Snackbar>
      )}

      {/* Alert Part */}
      {successMsg && (
        <Snackbar open={true} TransitionComponent={Slide}>
          <Alert severity="success" sx={{ width: "100%" }}>
            {successMsg}
          </Alert>
        </Snackbar>
      )}
    </Box>
  );
};
export default Login;
