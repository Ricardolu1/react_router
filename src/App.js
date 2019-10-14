import React from "react"
import "./App.css"
import {useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div class="navWrapper">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">SignUp</Link>
          <Link to="/welcome">Welcome</Link>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/welcome" component={Welcome}/>
        </Switch>
      </div>
    </Router>
  );
}

function Login() {
  return(
    <div className="box">登录</div>
  )
}
function SignUp() {
  return(
    <div className="box">注册 </div>
  )
}
function Welcome() {
  return(
    <div className="box">欢迎</div>
  )
}

function Home() {
  return <div className="box">home</div>
}


export default App










































// function App() {
//   return (
//     <div className="App">
//       App
//     </div>
//   )
// }







