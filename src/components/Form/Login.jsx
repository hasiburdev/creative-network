import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const Login = () => {
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
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
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
    </Box>
  );
};
export default Login;