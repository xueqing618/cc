import React, { Component } from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Login from '@/pages/login'
import Home from '@/pages/home'

import Reg from '@/pages/reg'
export default class index extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/reg" component={Reg}/>
          <Route path="/home" component={Home}/>
          <Redirect from="/" to="/login"/>
        </Switch>
      </BrowserRouter>
    )
  }
}
