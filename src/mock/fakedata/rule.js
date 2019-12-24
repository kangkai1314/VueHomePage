import Mock from 'mockjs'

let fakeNormalRuleData = Mock.mock({
  'dataList|10': [{
    'ruleId|+1': 1,
    'ruleCode|+1': '#' + 1,
    'ruleName': '@string',
    'ifCond': '@string',
    'thenDo': '@string',
    'parameter': '@string'

  }]
})

let fakeRuleWordsData = Mock.mock({
  'dataList|10': [{
    'gid|+1': 1,
    'glossary': '@string',
    'glossaryName': '元素名称',
    'gtype': '报文数据'
  }]
})

let fakeRuleOperatorData = Mock.mock({
  'dataList|10': [{
    'operId|+1': 1,
    'operator': '@string',
    'operatorName': '@string'
  }]
})

let fakeRuleParametersData = Mock.mock({
  'dataList|10': [
    {
      'ruleName': '规则描述',
      'parameters': '参数列表'
    }
  ]
})

export function fakeNormalRule () {
  return fakeNormalRuleData
}
export function fakeRuleWords () {
  return fakeRuleWordsData
}

export function fakeRuleOperator () {
  return fakeRuleOperatorData
}

export function fakeRuleParameters () {
  return fakeRuleParametersData
}
