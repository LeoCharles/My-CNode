import React, { Component } from 'react'
import { Avatar, Row, Col } from 'antd'
import UserList from './UserList'
import './style.less'
import res from './data'

export class User extends Component {
  render() {
    console.log(res);
    const data = res.data
    const { avatar_url, loginname, create_at, score, recent_topics, recent_replies } = data
    return (
      <div className="wrap user-wrap">
        <div className="user-info">
          <Avatar src={avatar_url} size={100} className="avatar" />
          <Row className="info">
            <Col md={8}>用户名：<span>{loginname}</span></Col>
            <Col md={8}>积分：<span>{score}</span></Col>
            <Col md={8}>注册时间：<time>{create_at.split('T')[0]}</time></Col>
          </Row>
        </div>
        <UserList loading={false} title="最近创建的话题" data={recent_topics} />
        <UserList loading={false} title="最近回复的话题" data={recent_replies} />
      </div>
    )
  }
}



export default User
