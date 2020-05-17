import React, { Component } from 'react'
import {NavLink,Route, Redirect} from 'react-router-dom'
import One from './one'
import Two from './two'
import Three from './three'
import Four from './four'
import { connect } from 'react-redux'
export default @connect(state => {
  return {
    data: state.login.data
  }
},{

})
 class index extends Component {
  render() {
    const { data } = this.props
    // let aa=data.data.user_name
    return (
     <>
      {/* <p>用户名：{aa}</p> */}
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
            <Redirect from="/home/one" to="/home/one"/>
          </div>
      </div>
     </>
    )
  }
}
