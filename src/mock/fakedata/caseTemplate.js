import Mock from 'mockjs'

let templateType = Mock.mock({
  dataList: [
    {
      id: 1,
      name: '套餐费'
    },
    {
      id: 2,
      name: '租费'
    },
    {
      id: 3,
      name: '套餐内'
    }

  ]
})
const count = 10
const caseTemplate = {
  currentPageSize: 10,
  totalNum: 20,
  totalPage: 2,
  dataList: [
    {id: 1, ruleIdentity: 3500001, baseType: '集团', ruleName: '套餐费199', ruleType: '分类', caseTemplate: '1', status: '创建中', creator: 'admin', validTime: '20180911', expireTime: '20190911'},
    {id: 2, ruleIdentity: 3500001, baseType: '省份', ruleName: '套餐费199', ruleType: '分类', caseTemplate: '1', status: '创建中', validTime: '20180911', expireTime: '20190911'},
    {id: 3, ruleIdentity: 3500001, ruleName: '套餐费199', ruleType: '分类', caseTemplate: '1', status: '创建中', validTime: '20180911', expireTime: '20190911'},
    {id: 4, ruleIdentity: 3500001, ruleName: '套餐费199', ruleType: '分类', caseTemplate: '1', status: '创建中', validTime: '20180911', expireTime: '20190911'},
    {id: 5, ruleIdentity: 3500001, ruleName: '套餐费199', ruleType: '分类', caseTemplate: '1', status: '创建中', validTime: '20180911', expireTime: '20190911'},
    {id: 6, ruleIdentity: 3500001, ruleName: '套餐费199', ruleType: '分类', caseTemplate: '1', status: '创建中', validTime: '20180911', expireTime: '20190911'}
  ],
  pageNum: 2,
  pageSize: 10
}
for (let i = 0; i < count; i++) {
  caseTemplate.dataList.push(Mock.mock({
    id: '1',
    rule_identity: '3500001',
    rule_name: '套餐费(X)元',
    rule_type: '1',
    case_template: '套餐费(X)元',
    critical_point: '有使用才收费，收费方式',
    ordinary_point: '首月折算标识'
  })
  )
}

const testPoints = Mock.mock({
  dataList: [
    {
      id: 1,
      name: '详单数'
    },
    {
      id: 2,
      name: '详单总费用'
    },
    {
      id: 3,
      name: '账务周期'
    }

  ]
})

const ruleTemplates = Mock.mock({
  dataList: [{
    id: 1,
    identity: 350001
  },
  {
    id: 2,
    identity: 350002
  }

  ]
})

let mockData = {
  templateType: templateType,
  testPoints: testPoints,
  caseTemplate: caseTemplate,
  ruleTemplates: ruleTemplates

}


