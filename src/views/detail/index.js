import React, { Component } from 'react'
import './style.less'
import res from './data.js'
import TextDetail from './TextDetail'
import ReplyList from './ReplyList'

export class Detail extends Component {

  render() {
    const data = res.data

    return (
      <div className="wrap detail-wrap">
        <TextDetail data={data} loading={false}/>
        <ReplyList replyList={data.replies} replyCount={data.reply_count} loading={false}/>
      </div>
    )
  }
}

export default Detail
