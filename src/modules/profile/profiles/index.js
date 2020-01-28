import React, { Component } from 'react';
import './index.css';
import { Layout, Table, Icon } from 'antd';

import PageHeader from '../../../commons/page_header';
import PageFooter from '../../../commons/page_footer';
import NewProfileModal from '../new_profile';
import EditProfileModal from '../edit_profile';
import DeleteProfileModal from '../delete_profile';

import { httpGetRequest, httpPostRequest } from '../../../utils/httpRequest.js';

const { Content } = Layout;

const tableData = [
    {
        id: 1,
        pfname: 'Julius',
        pmname: 'Guevarra',
        plname: 'De Guzman',
    },
    {
        id: 2,
        pfname: 'Lisalea',
        pmname: 'Angeles',
        plname: 'Santiago',
    },
    {
        id: 3,
        pfname: 'Julius',
        pmname: 'Guevarra',
        plname: 'De Guzman',
    },
    {
        id: 4,
        pfname: 'Lisalea',
        pmname: 'Angeles',
        plname: 'Santiago',
    },
    {
        id: 5,
        pfname: 'Julius',
        pmname: 'Guevarra',
        plname: 'De Guzman',
    },
    {
        id: 6,
        pfname: 'Lisalea',
        pmname: 'Angeles',
        plname: 'Santiago',
    },
    {
        id: 7,
        pfname: 'Julius',
        pmname: 'Guevarra',
        plname: 'De Guzman',
    },
    {
        id: 8,
        pfname: 'Lisalea',
        pmname: 'Angeles',
        plname: 'Santiago',
    },
    {
        id: 9,
        pfname: 'Julius',
        pmname: 'Guevarra',
        plname: 'De Guzman',
    },
    {
        id: 10,
        pfname: 'Lisalea',
        pmname: 'Angeles',
        plname: 'Santiago',
    },
];

class Actions extends Component {
    constructor(props){
        super(props);
    }
    
    render(){
        const { editProfile, profileId, profileData,delProfile }= this.props;
        return(
        <div>
            <Icon className="action-icons" type="edit" onClick={() => editProfile(profileId, profileData)}/>
            <Icon className="action-icons" type="delete" onClick={() => delProfile(profileId)}/>
        </div>
        );
    }
}

class Profiles extends Component {
    state = {
        isNewProfileModalVisible: false,
        isEditProfileModalVisible: false,
        isDeleteProfileModalVisible: false,
        profilesData: []
    }

    componentDidMount(){
        this.handleGetProfiles()
    }

    handleGetProfiles = () => {
        httpGetRequest('profiles').then(result => {
            console.log("get result: ", result)
            this.setState({
                profilesData: result
            })
        })
    }

    handleSaveProfile = (data) => {
        httpPostRequest('new-profile', data).then(result => {
            console.log("post result: ", result)
            this.handleGetProfiles()
        })
    }

    handleEditProfile = (id, data) => {
        const { form } = this.formRefUpdate.props;
        form.setFieldsValue({
            fname: data.fname,
            mname: data.mname,
            lname: data.lname
        })
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
                this.handleSaveProfile(values);
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

    handleDeleteProfile = (id) => {
        this.setState({
            isDeleteProfileModalVisible: true
        });
    }

    handleProfileDelete = () => {
        this.setState({
            isDeleteProfileModalVisible: false
        });
    }

    handleCancelDelete = () => {
        this.setState({
            isDeleteProfileModalVisible: false
        });
    }

    render(){
        const { isNewProfileModalVisible, isEditProfileModalVisible, isDeleteProfileModalVisible, profilesData } = this.state;
        const tableColumns = [
            {
                title: 'FIRST NAME',
                dataIndex: 'pfname',
            },
            {
                title: 'MIDDLE NAME',
                dataIndex: 'pmname',
            },
            {
                title: 'LAST NAME',
                dataIndex: 'plname',
            },
            {
                title: <Icon className="new-profile-icon" type="form" onClick={() => this.handleNewProfile()}/>,
                dataIndex: "id",
                render: (a, row) => <Actions 
                                        profileId={a} 
                                        profileData={row} 
                                        editProfile={(id,data) => this.handleEditProfile(id, data)}
                                        delProfile={(id) => this.handleDeleteProfile(id)}
                                    />
            },
        ];

        return (
            <Layout className="profiles-body">
                <PageHeader/>
                <Content className="profiles-content">
                    <Table
                        className="content-table"
                        columns={tableColumns}
                        dataSource={profilesData}
                        pagination={{defaultPageSize: 7}}
                        rowKey="id"
                    />
                </Content>
                <NewProfileModal wrappedComponentRef={this.saveFormRef} visible={isNewProfileModalVisible} onCancel={() => this.handleCancelNew()} onCreate={() => this.handleCreateProfile()}/>
                <EditProfileModal wrappedComponentRef={this.updateFormRef} visible={isEditProfileModalVisible} onCancel={() => this.handleCancelEdit()} onUpdate={() => this.handleUpdateProfile()}/>
                <DeleteProfileModal visible={isDeleteProfileModalVisible} onCancel={() => this.handleCancelDelete()} onDelete={() => this.handleProfileDelete()}/> 
                <PageFooter/>
            </Layout>
        );
    }
}

export default Profiles;