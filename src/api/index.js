import request from '../utils/request'

// 获取主题列表
export const getTopics = (params) => {
  return request.get('/api/v1/topics', {params})
}

// 获取主题详情
export const getTopicDetail = (id) => {
  return request.get(`/api/v1/topics/${id}`)
}