import React, { Component } from 'react';
import './index.css';
import { Layout, Table, Icon } from 'antd';

const { Header, Footer, Content } = Layout;

class NewProfile extends Component {
    render(){
        return(
                <Icon className="new-profile-icon" type="form" />
        );
    }
}

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
        title: <NewProfile />,
        dataIndex: "id",
        render: (a, row) => <Actions profileId={a} profileData={row} />
    },
];

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
    render(){
        return (
            <Layout className="profiles-body">
                <Header className="profiles-header">PROFILES</Header>
                <Content className="profiles-content">
                    <Table
                        className="content-table"
                        columns={tableColumns}
                        dataSource={tableData}
                        pagination={{defaultPageSize: 7}}
                    />
                </Content>
                <Footer className="profiles-footer"></Footer>
            </Layout>
        );
    }
}

export default Profiles;