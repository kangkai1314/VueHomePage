import {fakeMenus, fakeRanks} from './weibo/menus'
import {fakeCaseScene} from './fakedata/case'
import {fakeUser} from './weibo/user'

const Mock = require('mockjs')
/* case fake data */

Mock.mock('/weibo/menus', /get/i, fakeMenus)
Mock.mock('/case-scenes/all', /get/i, fakeCaseScene)
Mock.mock('/weibo/user', /get/i, fakeUser)
Mock.mock('/weibo/ranks', /get/i, fakeRanks)
