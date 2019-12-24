import Mock from 'mockjs'
const list = []
const testPoints = []
const count = 45
for (let i = 0; i < count; i++) {
  list.push(Mock.mock({
    indentity: '35000001',
    name: '套餐费(X)元',
    type: '套餐费',
    parameter: '构成类型;接入产品;作用周期',
    content: [
      {name: '构成类型(1000001)', type: '参考主数据编码“OFF-0010 销售品产品构成类型”', value: null},
      {name: '接入产品(1000002)', type: '参考集团的产品目录对应的产品编码（目前支持：移动电话（仅含本地语音）、天翼宽带-无线上网）', value: null},
      {name: '作用周期(1000003)',
        type: '枚举型',
        value: [
          {paraId: 1, paraVal: '月初收取'}
        ]
      }

    ]
  }))
}
for (let i = 0; i < count; i++) {
  testPoints.push(Mock.mock({
    identity: '10001',
    name: '测试点名称',
    type: '详单',
    class: '普通点',
    template: '清单'
  })
  )
}
let templateType = Mock.mock({
  dataList: [
    {
      id: 1,
      type: '套餐费'
    },
    {
      id: 2,
      type: '租费'
    },
    {
      id: 3,
      type: '套餐内'
    }

  ]
})

export function fakeRuleTemplateOptions () {
  return {
    data: templateType
  }
}

export function fakeRuleTemplates () {
  return {
    data: list
  }
}
