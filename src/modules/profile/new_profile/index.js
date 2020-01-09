import './index.css';
import React, {Component} from 'react';
import { Form, Modal, Input, Row, Col } from 'antd';

class NewProfile extends Component {

    handleCancel = ()=> {
        window.location.reload()
    }

    handleCreate = ()=> {
        window.location.reload()
    }

    render(){
        const { visible, onCancel, onCreate, form } = this.props;
        const { getFieldDecorator } = form;
        return(
            <Row type="flex" align="middle" justify="center">
                <Col span={24}>
                    <Modal
                        className="new-profile-modal"
                        visible={visible}
                        title="Create a New Profile"
                        okText="Create"
                        onCancel={() => this.handleCancel()}
                        onOk={() => this.handleCreate()}
                    >
                        <Form layout="vertical">
                            <Form.Item label="First Name">
                                {getFieldDecorator('fname', {
                                    rules: [{ required: true, message: 'Please input first name!' }],
                                })(<Input />)}
                            </Form.Item>
                            <Form.Item label="Middle Name">
                                {getFieldDecorator('mname', {
                                    rules: [{ required: true, message: 'Please input middle name!' }],
                                })(<Input />)}
                            </Form.Item>
                            <Form.Item label="Last Name">
                                {getFieldDecorator('lname', {
                                    rules: [{ required: true, message: 'Please input last name!' }],
                                })(<Input />)}
                            </Form.Item>
                        </Form>
                    </Modal>
                </Col>
            </Row>
        );
    }
}

export default Form.create()(NewProfile);