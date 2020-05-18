import React, { Component } from 'react'

import { Table, Button, message, Input } from 'antd';
import Axios from 'axios';
import qs from 'qs';
const { Search } = Input;

export default class index extends Component {

    columns = [
        {
            title: 'id',
            dataIndex: 'id',
        },
        {
            title: '名字',
            dataIndex: 'name',
        },
        {
            title: '年龄',
            dataIndex: 'age',
        },
        {
            title: '性别',
            dataIndex: 'gender',
        },
        {
            title: '信息',
            dataIndex: 'msg',
        },
        {
            title: '数量',
            dataIndex: 'count',
        },
        {
            title: '排序',
            dataIndex: 'sort',
        },
        {
            title: '时间',
            dataIndex: 'time',
        },
        {
            title: '地址',
            dataIndex: 'address',
        },
        {
            title: '操作',
            dataIndex: 'id',
            render: (text,item) => {
                return (
                    <span>
                        <Button type="link" onClick={()=>this.delFn(text)}>删除</Button>
                        <Button type="link">修改</Button>
                        <Button type="link">锁定</Button>
                    </span>
                )
            }
        },
    ];

    delFn = (id) => {
        // console.log(id) 
        Axios.post('http://api.baxiaobu.com/index.php/home/v5/deleteUser', qs.stringify({ id }))
            .then(res => {
                // console.log(res)
                message.info(res.data.info);
                this.getData();
            })
    }

    state = {
        selectedRowKeys: [], // Check here to configure the default column
        loading: false,
        data:[]
    };

    start = () => {
        this.setState({ loading: true });
        // ajax request after empty completing
        setTimeout(() => {
            this.setState({
                selectedRowKeys: [],
                loading: false,
            });
        }, 1000);
    };

    onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    };
    getData = () => {
        Axios.get('http://api.baxiaobu.com/index.php/home/v5/getuser')
            .then(res => {
                this.setState({
                    data: res.data.users.sort((a,b) =>b.id-a.id )
                })
            })
    }
    componentDidMount() {
        this.getData()
    }

    onSearchFn = value => {
        Axios.get('http://api.baxiaobu.com/index.php/home/v5/findUser?keyword='+value)
            .then(res => {
                this.setState({
                    data: res.data.users ? res.data.users.sort((a,b) =>b.id-a.id ) : []
                })
            })
    }

    render() {
        const { loading, selectedRowKeys, data } = this.state;

        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };

        return (
            <div>
                <div style={{ width:300 }}>
                    <Search
                        placeholder="这里是搜索"
                        enterButton="搜索"
                        size="large"
                        onSearch={ this.onSearchFn }
                    />
                </div>
                <Table size="small" rowKey="id" rowSelection={rowSelection} columns={this.columns} dataSource={data} />
            </div>
        )
    }
}
