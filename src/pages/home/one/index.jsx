import React, { Component } from 'react'
import echarts from 'echarts'
export default class index extends Component {
  componentDidMount () {
    var myChart = echarts.init(document.getElementById('main'));
    var option =
    {
      tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      legend: {
          orient: 'vertical',
          left: 10,
          data: ['pink', 'blue', 'yellow']
      },
      series: [
          {
              name: '访问来源',
              type: 'pie',
              radius: ['50%', '70%'],
              avoidLabelOverlap: false,
              label: {
                  show: false,
                  position: 'center'
              },
              emphasis: {
                  label: {
                      show: true,
                      fontSize: '30',
                      fontWeight: 'bold'
                  }
              },
              labelLine: {
                  show: false
              },
              data: [
                  {value: 335, name: 'pink'},
                  {value: 310, name: 'blue'},
                  {value: 234, name: 'yellow'}
              ]
          }
      ]
  }
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
   }
  render() {
    return (
      
        <div id="main" style={{ height: "100%" }}></div>
      
    )
  }
}
