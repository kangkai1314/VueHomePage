import Mock from 'mockjs'
let menus = Mock.mock({
  'dataList|10': [{
    'id|+1': 1,
    'name': '菜单'
  }]
})

export function fakeMenus () {
  return menus
}

let ranks = Mock.mock({
  'dataList|10': [{
    'id|+1': 1,
    'title': '@ctitle',
    'nums|1-10': 1
  }]
})

export function fakeRanks () {
  return ranks
}
