import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'

export default class TopicMenu extends Component {
  render() {
    const { mode } = this.props
    return (
      <Menu
        defaultSelectedKeys={['all']}
        mode={mode}
        className="topic-menu">
        <Menu.Item key="all">
          <Link to="/index/all">全部</Link>
        </Menu.Item>
        <Menu.Item key="good">
          <Link to="/index/good">精华</Link>
        </Menu.Item>
        <Menu.Item key="ask">
          <Link to="/index/ask">问题</Link>
        </Menu.Item>
        <Menu.Item key="share">
          <Link to="/index/share">分享</Link>
        </Menu.Item>
        <Menu.Item key="job">
          <Link to="/index/job">招聘</Link>
        </Menu.Item>
        <Menu.Item key="dev">
          <Link to="/index/dev">测试</Link>
        </Menu.Item>
      </Menu>
    )
  }
}
