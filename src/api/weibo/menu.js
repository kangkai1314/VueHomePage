import service from '@/utils/request'

export function fetchWeiBoMenus () {
  return service({
    url: '/weibo/menus',
    method: 'get'
  })
}

export function fetchWeiBoUser () {
  return service({
    url: '/weibo/user',
    method: 'get'
  })
}

export function fetchWeiboRanks () {
  return service({
    url: '/weibo/ranks',
    method: 'get'
  })
}
