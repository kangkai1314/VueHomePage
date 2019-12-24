import Mock from 'mockjs'

let fakeSceneData = Mock.mock({
  'dataList|10': [{
    'sceneId|+1': 10,
    'sceneName': '场景名称',
    'sceneDesc': '场景具体描述',
    'requireSource': '@Number',
    'testRequire': '参数值',
    'sceneStatus': '可测试',
    'completeTime': 1
  }]

})

export function fakeScene () {
  return {
    data: fakeSceneData
  }
}
