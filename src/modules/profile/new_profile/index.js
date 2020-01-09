import './index.css';
import React, {Component} from 'react';
import { Form, Modal, Input } from 'antd';

class NewProfile extends Component {
    render(){
        const { visible, onCancel, onCreate, form } = this.props;
        const { getFieldDecorator } = form;
        return(
            <Modal
                className="new-profile-modal"
                visible={true}
                title="Create a New Profile"
                okText="Create"
                onCancel={onCancel}
                onOk={onCreate}
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
        );
    }
}

export default Form.create()(NewProfile);