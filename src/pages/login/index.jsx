import React from 'react'
import { Form, Icon, Input, Button} from 'antd';
import {connect} from 'react-redux'
import {logins} from '@/actions/login'
import {Link} from 'react-router-dom'

export default @connect(state=>{
  return {
    data:state.login.data
  }},{
    logins
  }
)
@Form.create()
class index extends React.Component {
  
  handleSubmit = e => {
    const {props}=this
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        
        console.log('Received values of form: ', values);
        console.log(values.username)
        props.logins(values)
        .then(res=>{
          if(res.payload.status==='200'){
            props.history.push('/home')
          }
          else{
            alert(res.payload.message)
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
                登录
              </Button>
              <Link to='/reg'><Button>注册</Button></Link>
            </Form.Item>
          </Form>
      </div>
    )
  }
}








