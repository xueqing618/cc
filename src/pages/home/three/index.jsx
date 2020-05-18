import React, { Component } from 'react'
import { Form, Input, Button } from 'antd';
import {post} from '../../../untils/request'
import api from '@/services/api'

export default @Form.create({
  // 表单回填使用
  mapPropsToFields (props) {
    console.log(props)
    return {
      name:Form.createFormField({
        value:props.name
      }),
      age:Form.createFormField({
        value:props.age
      }),
      msg:Form.createFormField({
        value:props.msg
      })
    }
  },
})

class index extends Component {
  handleReset = () => {
    this.props.form.resetFields();
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(api.add)
    this.props.form.validateFields((err, values) => {
      if (!err) {
        post(api.add, values).then(res => {
          if (res.status == 200) {
            alert(res.info)
            this.props.history.push('/home/two')
          }
        })
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="Add">
        <Form onSubmit={this.handleSubmit} >
          <Form.Item label="Name" >
            {getFieldDecorator('name', {
              rules: [{ required: true, message: '请输入用户名' }],
            })(
              <Input placeholder="Name" />
            )}
          </Form.Item>
          <Form.Item label="Age">
          {getFieldDecorator('age', {
              rules: [{ required: true, message: '请输入年龄' }],
            })(
              <Input placeholder="Age" />
            )}
          </Form.Item>
          <Form.Item label="Msg">
            {getFieldDecorator('msg', {
              rules: [{ required: true, message: '请输入价格' }],
            })(
              <Input placeholder="Msg" />
            )}
          </Form.Item>
          <Form.Item >
            <Button type="primary" htmlType="submit" >Submit</Button>
            <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
              Clear
            </Button>          
          </Form.Item>
        </Form>
      </div>
    )
  }
}
