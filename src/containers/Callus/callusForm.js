import React, {PropTypes} from 'react'
import {Row, Col, Input, Button, Form} from 'antd'
import MediaQuery from 'react-responsive';
import './Callus.scss';
import SectionTitle from '../../components/sectionTitle/sectionTitle'
import request from '../../assets/common/request.js'
import config from '../../assets/common/confing.js'
const FormItem = Form.Item;

class CallusForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      phoneNumber: '',
      content: '',
      email: ''
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
       if(!err){
         request.get(config.api.base + config.api.contactUs, {
           name: encodeURI(values.name),
           telephone: values.phone,
           email: values.email,
           content: encodeURI(values.content)
         }).then(res => {
           if(res&&res.success){
               this.props.form.resetFields()
           }
         })
       }
    });
  }
  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <section className="callus_form">
        <SectionTitle title='加入爱居客' intr=''/>
          <Form className="content" onSubmit={this.handleSubmit.bind(this)}>
            <Row className='submit_mess'>
              <Col xs={24} sm={11}>
                <FormItem hasFeedback>
                  {getFieldDecorator('name', {
                    rules: [
                      {
                        type: 'string',
                        message: '请输入有效的名字'
                      }, {
                        required: true,
                        message: '名字不能为空'
                      }
                    ]
                  })(<Input placeholder="姓名"/>)}
                </FormItem>
              </Col>
              <Col xs={0} sm={2}></Col>
              <Col xs={24} sm={11}>
                <FormItem hasFeedback>
                  {getFieldDecorator('phone', {
                    rules: [
                      {
                        required: true,
                        message: '电话号码不能为空'
                      }, {
                        pattern: /^1[3|4|5|8][0-9]\d{4,8}$/,
                        message: '请输入正确的电话号码'
                      }
                    ]
                  })(<Input placeholder="电话"/>)}
                </FormItem>
              </Col>
              <Col xs={24} >
                <FormItem hasFeedback>
                  {getFieldDecorator('email', {
                    rules: [
                      {
                        type: 'email',
                        message: '请输入有效的邮箱'
                      }, {
                        required: true,
                        message: '邮箱不能为空'
                      }
                    ]
                  })(<Input placeholder="邮箱"/>)}
                </FormItem>
              </Col>
            </Row>
            <Row className='submit_content'>
              <FormItem>
                {getFieldDecorator('content', {})(<Input type="textarea" className='input' autosize={{
                  minRows: 4
                }} placeholder="留言内容"/>)}
              </FormItem>
            </Row>
            <FormItem>
              <Button type="primary" className='submit_button' htmlType="submit" size="large">提交</Button>
            </FormItem>
          </Form>
      </section>
    )
  }
}
const WrappedRegistrationForm = Form.create()(CallusForm);
export default WrappedRegistrationForm;
