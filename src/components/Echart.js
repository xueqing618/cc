import React, { Component } from 'react'
import echarts from 'echarts'
import { withRouter } from 'react-router-dom'

export default @withRouter
class Echart extends Component {
  componentDidMount () {
    const { option } = this.props
    var myChart = echarts.init(this.el);
    myChart.setOption(option);
  }
  render() {
    return (
      <div className="content" ref={v => this.el = v}>
      </div>
    )
  }
}
