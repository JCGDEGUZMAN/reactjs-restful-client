import './index.css';
import React, {Component} from 'react';
import { Form, Modal, Input, Row, Col } from 'antd';

class EditProfile extends Component {

    render(){
        const { visible, onCancel, onUpdate, form } = this.props;
        const { getFieldDecorator } = form;
        return(
            <Row type="flex" align="middle" justify="center">
                <Col span={24}>
                    <Modal
                        className="edit-profile-modal"
                        visible={visible}
                        title="Edit Profile"
                        okText="Update"
                        onCancel={onCancel}
                        onOk={onUpdate}
                    >
                        <Form layout="vertical">
                            <Form.Item label="First Name">
                                {getFieldDecorator('pfname', {
                                    rules: [{ required: true, message: 'Please input first name!' }],
                                })(<Input />)}
                            </Form.Item>
                            <Form.Item label="Middle Name">
                                {getFieldDecorator('pmname', {
                                    rules: [{ required: true, message: 'Please input middle name!' }],
                                })(<Input />)}
                            </Form.Item>
                            <Form.Item label="Last Name">
                                {getFieldDecorator('plname', {
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

export default Form.create()(EditProfile);