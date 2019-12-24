import Mock from 'mockjs'

let fakeTaskResultData = Mock.mock({
  dataList: {
    taskName: 'XXX销售品 用户本地主叫未超量',
    buildDate: '2019-04-23 11:00:20',
    testResult: '不通过',
    userInfo: [{
      productId: '1890000001',
      details: [{
        checkType: '清单类',
        checkName: '详单数',
        expectValue: 19,
        testValue: 19,
        state: '通过'
      },
      {
        checkType: '清单类',
        checkName: '详单数',
        expectValue: 19,
        testValue: 19,
        state: '通过'
      }]
    },
    {
      productId: '1890000002',
      details: [{
        checkType: '清单类',
        checkName: '详单数',
        expectValue: 19,
        testValue: 19,
        state: '通过'
      },
      {
        checkType: '清单类',
        checkName: '详单数',
        expectValue: 19,
        testValue: 19,
        state: '通过'
      }]
    }]
  }
})

export function fakeTaskResult () {
  return fakeTaskResultData
}
