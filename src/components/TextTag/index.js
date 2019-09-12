import React from 'react'
import { Tag } from 'antd'

const tab = {
  top: {
    txt: '置顶',
    color: '#80bd01'
  },
  good: {
    txt: '精华',
    color: '#108ee9'
  },
  share: {
    txt: '分享',
    color: 'purple'
  },
  ask: {
    txt: '问答',
    color: 'geekblue'
  },
  job: {
    txt: '招聘',
    color: 'gold'
  },
  dev: {
    txt: '测试',
    color: '#999'
  },
}

const getTab = (data) => {
  return data.top ? 'top' : data.good ? 'good' :  data.tab
}

const TextTag = (props) => {
  let nowTab = tab[getTab(props.data)]
  return (
    <Tag color={nowTab.color}>{nowTab.txt}</Tag>
  )
}

export default TextTag
