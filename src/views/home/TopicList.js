import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { List, Avatar } from 'antd'
import TextTag from 'components/TextTag'
import { getTopicList } from '@/actions/list'

class TopicList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 1,
      limit: 15
    }
  }

  getData(tab) {
    this.props.getTopicListDispatch({
      ...this.state,
      tab
    })
  }

  // 挂载后请求数据
  componentDidMount() {
    this.getData(this.props.tab)
  }

  // 切换 tab 时更新数据
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.tab !== nextProps.tab) {
      this.getData(nextProps.tab)
      return false
    } else {
      return true
    }
  }

  render() {
    const { data, loading } = this.props

    return (
      <List
        dataSource={data}
        loading={loading}
        renderItem={item => (
          <List.Item
            key={item.id}
            actions={['回复：' + item.reply_count, '访问：' + item.visit_count]}>
            <List.Item.Meta
              avatar={<Avatar src={item.author.avatar_url}/>}
              title={<Link to={"/detail/" + item.id}><TextTag data={item}/>{item.title}</Link>}
              description={
                <p>
                  <Link to={"/user/" + item.author.loginname}>{item.author.loginname}</Link>
                  <time className="time">发表于：{item.create_at.split('T')[0]}</time>
                </p>}
            ></List.Item.Meta>
          </List.Item>
        )}>
      </List>
    )
  }
}

const mapStateToProps = (state) => {
  const { data, loading } = state.list
  return {
    data,
    loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTopicListDispatch: (params) => {
      dispatch(getTopicList(params))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicList)