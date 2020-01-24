import React, { Component } from 'react';
import './index.css';
import { Layout, Table, Icon } from 'antd';

import PageHeader from '../../../commons/page_header';
import PageFooter from '../../../commons/page_footer';
import NewProfileModal from '../new_profile';
import EditProfileModal from '../edit_profile';

const { Content } = Layout;

const tableData = [
    {
        id: 1,
        fname: 'Julius',
        mname: 'Guevarra',
        lname: 'De Guzman',
    },
    {
        id: 2,
        fname: 'Lisalea',
        mname: 'Angeles',
        lname: 'Santiago',
    },
    {
        id: 3,
        fname: 'Julius',
        mname: 'Guevarra',
        lname: 'De Guzman',
    },
    {
        id: 4,
        fname: 'Lisalea',
        mname: 'Angeles',
        lname: 'Santiago',
    },
    {
        id: 5,
        fname: 'Julius',
        mname: 'Guevarra',
        lname: 'De Guzman',
    },
    {
        id: 6,
        fname: 'Lisalea',
        mname: 'Angeles',
        lname: 'Santiago',
    },
    {
        id: 7,
        fname: 'Julius',
        mname: 'Guevarra',
        lname: 'De Guzman',
    },
    {
        id: 8,
        fname: 'Lisalea',
        mname: 'Angeles',
        lname: 'Santiago',
    },
    {
        id: 9,
        fname: 'Julius',
        mname: 'Guevarra',
        lname: 'De Guzman',
    },
    {
        id: 10,
        fname: 'Lisalea',
        mname: 'Angeles',
        lname: 'Santiago',
    },
];

class Actions extends Component {
    constructor(props){
        super(props);
    }
    
    render(){
        const { editProfile, profileId, profileData }= this.props;
        return(
        <div>
            <Icon className="action-icons" type="edit" onClick={() => editProfile()}/>
            <Icon className="action-icons" type="delete" />
        </div>
        );
    }
}

class Profiles extends Component {
    state = {
        isNewProfileModalVisible: false,
        isEditProfileModalVisible: false
    }

    handleEditProfile = () => {
        this.setState({
            isEditProfileModalVisible: true
        });
    }

    handleUpdateProfile = () => {
        const { form } = this.formRefUpdate.props;
        form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                form.resetFields();
                this.setState({ isEditProfileModalVisible: false });
            }
        });
    };

    handleCancelEdit = () => {
        const { form } = this.formRefUpdate.props;
        form.resetFields();
        this.setState({
            isEditProfileModalVisible: false
        });
    }

    updateFormRef = formRefUpdate => {
        this.formRefUpdate = formRefUpdate;
    };

    handleNewProfile = () => {
        this.setState({
            isNewProfileModalVisible: true
        });
    }

    handleCreateProfile = () => {
        const { form } = this.formRefSave.props;
        form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                form.resetFields();
                this.setState({ isNewProfileModalVisible: false });
            }
        });
    };

    handleCancelNew = () => {
        const { form } = this.formRefSave.props;
        form.resetFields();
        this.setState({
            isNewProfileModalVisible: false
        });
    }

    saveFormRef = formRefSave => {
        this.formRefSave = formRefSave;
    };

    render(){
        const { isNewProfileModalVisible, isEditProfileModalVisible } = this.state;
        const tableColumns = [
            {
                title: 'FIRST NAME',
                dataIndex: 'fname',
            },
            {
                title: 'MIDDLE NAME',
                dataIndex: 'mname',
            },
            {
                title: 'LAST NAME',
                dataIndex: 'lname',
            },
            {
                title: <Icon className="new-profile-icon" type="form" onClick={() => this.handleNewProfile()}/>,
                dataIndex: "id",
                render: (a, row) => <Actions profileId={a} profileData={row} editProfile={() => this.handleEditProfile()}/>
            },
        ];

        return (
            <Layout className="profiles-body">
                <PageHeader/>
                <Content className="profiles-content">
                    <Table
                        className="content-table"
                        columns={tableColumns}
                        dataSource={tableData}
                        pagination={{defaultPageSize: 7}}
                    />
                </Content>
                <NewProfileModal wrappedComponentRef={this.saveFormRef} visible={isNewProfileModalVisible} onCancel={() => this.handleCancelNew()} onCreate={() => this.handleCreateProfile()}/>
                <EditProfileModal wrappedComponentRef={this.updateFormRef} visible={isEditProfileModalVisible} onCancel={() => this.handleCancelEdit()} onUpdate={() => this.handleUpdateProfile()}/>
                <PageFooter/>
            </Layout>
        );
    }
}

export default Profiles;