import React, { Component } from 'react'
import { Form, Icon, Input, Button} from 'antd';
import {connect} from 'react-redux'
import {regs} from '@/actions/reg'
import {Link} from 'react-router-dom'




export default @connect(state=>{
  return {
    data:state.reg.data
  }},{
    regs
  }
)
@Form.create()
class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    const {props}=this
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        
        props.regs(values)
        .then(res=>{
          console.log(res.payload.status)
          if(res.payload.status==='200'){
           
            props.history.replace('/login')
          }
          else{
           alert(res.payload.info)
          }
        })
      }
    });
  };
  render() {
  
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
          <Form onSubmit={this.handleSubmit}>
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input
                  prefix={<Icon type="user"/>}
                  placeholder="Username"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input
                  prefix={<Icon type="lock"/>}
                  type="password"
                  placeholder="Password"
                />,
              )}
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                注册
              </Button>
              <Link to='/login'><Button>登录</Button></Link>
            </Form.Item>
          </Form>
      </div>
    )
  }
}









