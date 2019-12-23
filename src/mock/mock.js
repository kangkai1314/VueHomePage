import {fakeData} from './weibo/data'
import Mock from 'mockjs'
Mock.mock('/data', /get/i, fakeData())
