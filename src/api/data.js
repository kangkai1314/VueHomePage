import service from '@/utils/request'

export function fetchInfo () {
  return service({
    url: '/rating-rule-type/types',
    method: 'get'
  })
}


