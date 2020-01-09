import React, { Component } from 'react';
import './index.css';
import { Layout, Table, Icon } from 'antd';

import PageHeader from '../../../commons/page_header';
import PageFooter from '../../../commons/page_footer';
import NewProfileModal from '../new_profile';

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
    render(){
        return(
        <div>
            <Icon className="action-icons" type="edit" />
            <Icon className="action-icons" type="delete" />
        </div>
        );
    }
}

class Profiles extends Component {
    state = {
        isModalVisible: false
    }

    handleNewProfile = () => {
        this.setState({
            isModalVisible: true
        });
    }

    handleCancel = () => {
        this.setState({
            isModalVisible: false
        });
    }

    handleCreate = () => {
        this.setState({
            isModalVisible: false
        });
    }

    render(){
        const { isModalVisible } = this.state;
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
                render: (a, row) => <Actions profileId={a} profileData={row} />
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
                <NewProfileModal visible={isModalVisible} onCancel={() => this.handleCancel()} onCreate={() => this.handleCreate()}/>
                <PageFooter/>
            </Layout>
        );
    }
}

export default Profiles;