import React , { Component } from 'react'
import { Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'

class Nav extends Component {
  render() {
    const { mode, theme} = this.props
    return (
      <Menu theme={theme} mode={mode} className="nav" >
        <Menu.Item key="home">
          <Link to="/index/all">
            <Icon type="home" />首页
          </Link>
        </Menu.Item>
        <Menu.Item key="book">
          <Link to="/tutorial">
            <Icon type="book" />教程
          </Link>
        </Menu.Item>
        <Menu.Item key="about">
          <Link to="/about">
            <Icon type="info-circle-o" />关于
          </Link>
        </Menu.Item>
      </Menu>
    )
  }
}
export default Nav