import React, { Component } from 'react'
import {NavLink,Route} from 'react-router-dom'
import One from './one'
import Two from './two'
import Three from './three'
import Four from './four'
export default class index extends Component {
  render() {
    return (
      <div className="home">
          <div className="left">
            <NavLink to="/home/one">chart</NavLink>
            <NavLink to="/home/two">table</NavLink>
            <NavLink to="/home/three">file</NavLink>
            <NavLink to="/home/four">pages</NavLink>
          </div>
          <div className="right">
            <Route path="/home/one" component={One}/>
            <Route path="/home/two" component={Two}/>
            <Route path="/home/three" component={Three}/>
            <Route path="/home/four" component={Four}/>
          </div>
      </div>
    )
  }
}
