import Mock from 'mockjs'

let pointType = Mock.mock({
  dataList: [
    {
      id: 1,
      name: '设置账期',
      type: '1'
    },
    {
      id: 3,
      name: '获取账单',
      type: '3'
    },
    {
      id: 2,
      name: '设置账单',
      type: '套餐内'
    }

  ]

})
let templateType = Mock.mock({
  dataList: [
    {
      id: 1,
      name: '设置账期',
      type: '1'
    },
    {
      id: 3,
      name: '获取账单',
      type: '3'
    },
    {
      id: 2,
      name: '设置账单',
      type: '套餐内'
    }

  ]

})

const testPoints = []
const testPointsPage = {
  total: 80,
  content: {
    testPointsPage1: {
      page: 1,
      content: []
    },
    testPointsPage2: {
      page: 2,
      content: []
    },
    testPointsPage3: {
      page: 3,
      content: []
    },
    testPointsPage4: {
      page: 4,
      content: []
    }}

}
const count = 20
for (let i = 0; i < count; i++) {
  testPointsPage.content.testPointsPage1.content.push(Mock.mock({
    identity: '10001',
    name: '测试点名称',
    type: '详单',
    class: '普通点',
    template: '清单'
  })
  )
}
for (let i = 0; i < count; i++) {
  testPointsPage.content.testPointsPage2.content.push(Mock.mock({
    identity: '10002',
    name: '测试点名称2',
    type: '详单',
    class: '普通点',
    template: '清单'
  })
  )
}
for (let i = 0; i < count; i++) {
  testPointsPage.content.testPointsPage3.content.push(Mock.mock({
    identity: '10003',
    name: '测试点名称3',
    type: '详单',
    class: '普通点',
    template: '清单'
  })
  )
}
for (let i = 0; i < count; i++) {
  testPointsPage.content.testPointsPage4.content.push(Mock.mock({
    identity: '10004',
    name: '测试点名称4',
    type: '详单',
    class: '普通点',
    template: '清单'
  })
  )
}
let actionFunctions = Mock.mock({
  dataList: [
    {
      id: 1,
      name: '设置账期',
      type: '1'
    },
    {
      id: 3,
      name: '获取账单',
      type: '3'
    },
    {
      id: 2,
      name: '设置账单',
      type: '套餐内'
    }

  ]

})

let mockData = {
  testPoints: testPoints,
  testPointsPage: testPointsPage,
  pointType: pointType,
  actionFucntions: actionFunctions,
  templateType: templateType
}

export function fakeTestPoints () {
  return {
    data: mockData.testPoints
  }
}

export function fakeTestPointTypes () {
  return {
    data: mockData.pointType
  }
}

export function fakeActionFunctions () {
  return {
    data: mockData.actionFucntions
  }
}

export function fakeTemplateType () {
  return {
    data: mockData.templateType
  }
}
