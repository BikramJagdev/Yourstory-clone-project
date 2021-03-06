import React, { useState,useEffect } from "react";
import {
  Typography,
  Container,
  Paper,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Box
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link, Redirect } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { loginData } from "../../Redux/AuthRedux/actionCreators";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "75vh"
  },
  form: {
    width: "70%",
    margin: theme.spacing(2),
    color: "#e5002d"
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#e5002d"
  },
  heading: {
    color: "#e5002d"
  }
}));

const Login = () => {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [isFound,setFound] = useState(false)

  const usersData = useSelector(state=>state.auth.userData)
  const isAuth = useSelector(state=>state.auth.isAuth)
  const  dispatch =useDispatch()
  useEffect(()=>{
    dispatch(loginData())
  },[])

  const handleLogin = (e)=>{
      e.preventDefault()
      console.log(email,password)

        for (let i = 0; i < usersData.length ; i++) {
            
            if (usersData[i].email === email && usersData[i].password === password) {
                    
                 localStorage.setItem("loginData",JSON.stringify(usersData[i]) )
                   //const loggedUserData=usersData[i]
                    
                     setFound(true)   
                    break  
            }

            else{
                if(usersData[i].email === email && usersData[i].password !== password){

                    setFound(true);
                    break 
                }
            }
        }
  }

  const classes = useStyles()
  return  !isFound?(
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h5" className={classes.heading}>
          Login with Email
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleLogin}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={email}
            onChange={e=>setEmail(e.target.value)}
            
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={e=>setPassword(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            Login
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/signup" style={{textDecoration:"none"}}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </Paper>
      <Box mt={8}></Box>
    </Container>
  ):<Redirect to="/"/>;
};
export { Login };
