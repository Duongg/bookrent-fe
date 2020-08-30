import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from '@material-ui/core';
import Page from 'src/components/Page';
import {POSTLOGIN} from 'src/api/caller';
import {LOGIN_ENDPOINT} from 'src/api/endpoint';


export default class LoginView extends React.Component {

  state = {
    username: '',
    password: '',
  }
  handleLogin = async () =>{
    await POSTLOGIN(LOGIN_ENDPOINT, {}, {username: this.state.username, password: this.state.password})
      .then(res =>{
        if(res.status === 200){
          sessionStorage.jwt = res.headers.get("Authorization");
          console.log(res);
         window.location = "/app/dashboard"
        }
      })
  }
  render(){
    const {username, password} = this.state
  return (
    <Page
      title="Login"
    >
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="sm">
                <Box mb={3}>
                  <Typography
                    color="textPrimary"
                    variant="h2"
                  >
                    Sign in
                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                  >
                    Sign in on the internal platform
                  </Typography>
                </Box>
                <Grid
                  container
                  spacing={3}
                >
                  <Grid
                    item
                    xs={12}
                    md={6}
                  >
                    <Button
                      color="primary"
                      fullWidth
                      size="large"
                      variant="contained"
                    >
                      Login with Facebook
                    </Button>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={6}
                  >
                    <Button
                      fullWidth
                      size="large"
                      variant="contained"
                    >
                      Login with Google
                    </Button>
                  </Grid>
                </Grid>
                <Box
                  mt={3}
                  mb={1}
                >
                  <Typography
                    align="center"
                    color="textSecondary"
                    variant="body1"
                  >
                    or login with Username and Password
                  </Typography>
                </Box>
                <TextField
                  fullWidth
                  label="Username"
                  margin="normal"
                  name="username"
                  onChange={(text) => this.setState({username:text.target.value})}
                  type="username"
                  value={username}
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Password"
                  margin="normal"
                  name="password"
                  onChange={(text) => {this.setState({password:text.target.value})}}
                  type="password"
                  value={password}
                  variant="outlined"
                />
                <Box my={2}>
                  <Button
                    color="primary"
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    onClick={()=> this.handleLogin()}
                  >
                    Sign in now
                  </Button>
                </Box>
                <Typography
                  color="textSecondary"
                  variant="body1"
                >
                  Don&apos;t have an account?
                  {' '}
                  <Link
                    component={RouterLink}
                    to="/register"
                    variant="h6"
                  >
                    Sign up
                  </Link>
                </Typography>
        </Container>
      </Box>
    </Page>
  );
}
};

