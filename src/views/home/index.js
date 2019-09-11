import React, { Component } from 'react'
import TopicMenu from './TopicMenu'
import TopicList from './TopicList'
import { Row, Col } from 'antd'
import './style.less'

export class Home extends Component {

  render() {
    console.log(this.props)
    return (
      <Row className="wrap">
        <Col md={6} xs={0}>
          <TopicMenu mode="vertical"/>
        </Col>
        <Col md={0} xs={24}>
          <TopicMenu mode="horizontal" />
        </Col>
        <Col md={18} xs={24} className="topic-list">
          <TopicList/>
        </Col>
      </Row>
    )
  }
}



export default Home
