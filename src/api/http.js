//将拦截器整体导入
import request from '@/utils/request'//导入已经写好的拦截器
 
// 封装所有的API接口
 
export function getTrainingList(params) {
  return request({
    url: '/app/adaptTrainOnline/queryList',
    method: 'get',
    headers: {
      noLoginFlag: true
    },
    params
  })
}
 