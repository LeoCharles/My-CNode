import React, { Component } from 'react'
import { Row, Col } from 'antd'
import TopicMenu from './TopicMenu'
import TopicList from './TopicList'
import './style.less'

export class Home extends Component {

  render() {
    const { match : { params: { tab }}} = this.props

    return (
      <Row className="wrap home-wrap">
        <Col md={6} xs={0}>
          <TopicMenu mode="vertical" tab={tab}/>
        </Col>
        <Col md={0} xs={24}>
          <TopicMenu mode="horizontal" tab={tab}/>
        </Col>
        <Col md={18} xs={24} className="topic-list">
          <TopicList tab={tab}/>
        </Col>
      </Row>
    )
  }
}

export default Home
