import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getname} from '../../../actions/fen'
import { Pagination } from 'antd';
export default @connect(({ fen }) => ({
   data: fen.data,
   count: fen.count
}), {
  getname
})

class index extends Component {
  
   componentDidMount () {
     this.props.getname({page:1})
     
   }
  onChange = page => {
    this.props.getname({page})
  };
  render() {
    const {data,count}=this.props
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
      <Pagination defaultCurrent={Number(1)}
      onChange={this.onChange}
      total={Number(count)} />
      </div>
      </>
    )
  }
}
