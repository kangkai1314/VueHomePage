import request from '@/utils/request'

export function fetchInfo () {
  return request({
    url: '/data',
    method: 'get'
  })
}
