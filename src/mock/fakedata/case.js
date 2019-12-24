import Mock from 'mockjs'

let fakeCaseData = Mock.mock({
  'dataList|10': [{
    'tcId|+1': 10,
    'sceneId|+1': 350001,
    'tcCode': '用例标识',
    'tcName': '用例名称',
    'tcType': '用例类型',
    'status': '用例状态',
    'validDate': '2019-08-01',
    'expiredDate': '2019-09-02',
    'checkIds': '7,8,9,10',
    'stepTmplId': '1004'
  }],
  totalNum: 100

})

let fakeCaseScenesData = Mock.mock({
  'dataList|10': [{
    'sceneId|+1': 35100,
    'sceneCode|+1': 35001,
    'sceneName': '场景名称'
  }]
})

let fakeCaseRuleData = Mock.mock({
  'dataList|10': [{
    'id|+1': 1,
    'ruleId|+1': 1,
    'ruleName': '规则名称',
    'ifCond': '条件',
    'thenDo': '动作',
    'parameter': '参数'
  }]
})

let fakeStepTmplData = Mock.mock({
  'dataList|10': [
    {
      'tmplId|+1': 1000,
      'busiName': '固费'
    }
  ]
})

let fakeMaxIndexData = Mock.mock({
  'dataList|1': {
    maxIndex: 100
  }
})

let fakeCaseTestPointsData = Mock.mock({
  'dataList|+1': [{
    'checkId|+1': 1,
    'checkType': '清单类',
    'checkName': '测试点名称'
  }]
})
export function fakeCase () {
  return fakeCaseData
}
export function fakeCaseScene () {
  return fakeCaseScenesData
}

export function fakeCaseRule () {
  return fakeCaseRuleData
}

export function fakeStepTmpl () {
  return fakeStepTmplData
}

export function fakeMaxIndex () {
  return fakeMaxIndexData
}

export function fakeCaseTestPoints () {
  return fakeCaseTestPointsData
}
