import Mock from 'mockjs'

let user = Mock.mock({
  'name': '@cname',
  avatar: 'https://tva4.sinaimg.cn/crop.0.1.638.638.180/832fa4aajw8fcrafdio24j20hs0hs750.jpg?KID=imgbed,tva&Expires=1576818916&ssig=rzSHtngiu%2F'
})

export function fakeUser () {
  return user
}
