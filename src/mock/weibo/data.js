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
export function fakeData () {
  return fakeFlowInstData
}
