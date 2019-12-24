import Mock from 'mockjs'

let fakeFlowInstData = Mock.mock({
  'dataList|10': [{
    'id|+1': 1,
    'requestId|+1': 1,
    'flowInstName': '流程实例名称',
    'startTime': '@date',
    'endTime': '@date',
    'status': '排队中'

  }],
  totalNum: 100

})

export function fakeFlowInst () {
  return fakeFlowInstData
}

let fakeFlowTaskData = Mock.mock({
  'dataList|10': [{
    'taskId|+1': 1,
    'caseInstId|+1': 10,
    'taskName': '@string',
    'taskType': '手动',
    'runPolicy': '自动',
    'runTiming': '20|03|01|00|30|*',
    'status': '排队中'
  }],
  totalNum: 100
})

export function fakeFlowTask () {
  return fakeFlowTaskData
}

let fakeFlowInstConditionData = Mock.mock({
  'dataList|10': [{

  }]
})

export function fakeFlwoInstCondition () {
  return fakeFlowInstConditionData
}

let fakeMonitorFlowsData = Mock.mock({
  'dataList|10': [{
    'taskId|+1': 1,
    'flowId|+1': 10,
    'pid|+1': 1000,
    'flowName': '@string',
    'status': '正常',
    'updateTime': '@date'
  }],
  totalNum: 66
})

export function fakeMonitorFlow () {
  return fakeMonitorFlowsData
}

let fakeMonitorTaskData = Mock.mock({
  'dataList|10': [{
    'taskId|+1': 1,
    'caseInstId|+1': 1000,
    'taskName': '@string',
    'startTime': '@date',
    'endTime': '@date',
    'status': '运行中'

  }]
})

export function fakeMonitorTask () {
  return fakeMonitorTaskData
}

let fakeTaskStepData = Mock.mock({
  'dataList|10': [{
    'stepOrder|+1': 1,
    'stepName': '@string',
    'startTime': '@date',
    'endTime': '@date',
    'status': '运行中',
    'reason': ''

  }]
})

export function fakeTaskStep () {
  return fakeTaskStepData
}

let fakeTaskOptionsData = Mock.mock({
  dataList: [{
    id: 1,
    name: '手动'
  },
  {
    id: 2,
    name: '自动'
  }]
})

export function fakeTaskOptions () {
  return fakeTaskOptionsData
}

let fakeTaskPolicysData = Mock.mock({
  dataList: [{
    id: 1, name: '人工'
  },
  {
    id: 2, name: '自动'
  }]
})

export function fakeTaskPlicy () {
  return fakeTaskPolicysData
}
