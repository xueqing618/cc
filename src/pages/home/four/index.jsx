import React, { Component } from 'react'
import axios from 'axios'

import { Pagination } from 'antd';
export default class index extends Component {
  state={
    data:[]
  }

  componentDidMount(){
    axios.get('https://blogs.zdldove.top/Home/Apis/listWithPage').then(res=>{
        this.setState({
          data:res.data.result.list
        })
    })  
  }
  render() {
    const {data}=this.state
    console.log(data)
    return (
      <>
      <div className="four">
        {
          data.map((v,i)=>{
            return <div className="four_q" key={i}>
                <div>{v.id}</div>
                <div>{v.title}</div>
                <div>{v.tags}</div>
                <div>
                  <img src={v.thumb}/>
                </div>
            </div>
          })
        }
      </div>
      <div>
      <Pagination defaultCurrent={6} total={500} />
      </div>
      </>
    )
  }
}
