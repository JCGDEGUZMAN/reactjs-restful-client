import "./index.css";
import React, {Component} from 'react';
import { Modal, Row, Col } from 'antd';

class DeleteProfile extends Component {
    render(){
        const { visible, onCancel, onDelete } = this.props;
        return(
            <Row type="flex" align="middle" justify="center">
                <Col span={24}>
                    <Modal
                        className="del-profile-modal"
                        visible={visible}
                        title="Delete Profile"
                        okText="Delete"
                        onCancel={onCancel}
                        onOk={onDelete}
                    >
                        Are you sure?
                    </Modal>
                </Col>
            </Row>
        );
    }
}

export default DeleteProfile;