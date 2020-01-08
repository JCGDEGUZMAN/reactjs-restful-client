import React, { Component } from 'react';
import './index.css';
import { Layout, Table, Row, Col } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const tableColumns = [
    {
        title: 'First Name',
        dataIndex: 'fname',
    },
    {
        title: 'Middle Name',
        dataIndex: 'mname',
    },
    {
        title: 'Last Name',
        dataIndex: 'lname',
    },
];

const tableData = [
    {
        fname: 'Julius',
        mname: 'Guevarra',
        lname: 'De Guzman',
    },
    {
        fname: 'Lisalea',
        mname: 'Angeles',
        lname: 'Santiago',
    },
    {
        fname: 'Julius',
        mname: 'Guevarra',
        lname: 'De Guzman',
    },
    {
        fname: 'Lisalea',
        mname: 'Angeles',
        lname: 'Santiago',
    },
    {
        fname: 'Julius',
        mname: 'Guevarra',
        lname: 'De Guzman',
    },
    {
        fname: 'Lisalea',
        mname: 'Angeles',
        lname: 'Santiago',
    },
    {
        fname: 'Julius',
        mname: 'Guevarra',
        lname: 'De Guzman',
    },
    {
        fname: 'Lisalea',
        mname: 'Angeles',
        lname: 'Santiago',
    },
    {
        fname: 'Julius',
        mname: 'Guevarra',
        lname: 'De Guzman',
    },
    {
        fname: 'Lisalea',
        mname: 'Angeles',
        lname: 'Santiago',
    },
];

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