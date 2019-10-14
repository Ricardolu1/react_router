import React from "react"
import "./App.css"
import {useState} from 'react'
import { Router, Route, Link } from 'react-router'

function App() {
  let hash = window.location.hash
  let initUi=''

  if (hash==='#signup') {
    initUi='注册'
  }else if(hash==='#login'){
    initUi='登录'
  }else{
    initUi='欢迎'
  }

  let [ui,setUi]=useState(initUi)

  let onClickLogin = ()=>{
    setUi('登录')
    window.location.hash='login'
  }
  let onClickSignUp=()=>{
    setUi('注册')
    window.location.hash='signup'
  }
  let onClickWelcome=()=>{
    setUi('欢迎')
    window.location.hash='welcome'
  }

  let showUi = ()=>{
    if (ui==='登录') {
      return <Box1 />
    }else if (ui==='注册') {
      return <Box2 />
    }else if (ui === '欢迎')  {
      return <Welcome />
    }
  }

  return (
    <div className="App">
      <button onClick={onClickLogin}>登录</button>
      <button onClick={onClickSignUp}>注册</button>
      <button onClick={onClickWelcome}>欢迎</button>
      <div>
        {showUi()}
      </div>
    </div>
  )
}

function Box1() {
  return(
    <div className="box">登录</div>
  )
}
function Box2() {
  return(
    <div className="box">注册 </div>
  )
}
function Welcome() {
  return(
    <div className="box">欢迎</div>
  )
}





export default App
