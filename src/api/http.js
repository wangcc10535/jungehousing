//将拦截器整体导入
import request from '@/utils/request'; //导入已经写好的拦截器

// 获取banner
export function getBanners() {
  return request({
    url: '/system/dict/data/type/banner',
    method: 'get'
  });
}
// 获取销售类型
export function getSaletype() {
  return request({
    url: '/system/dict/data/type/sale_type',
    method: 'get'
  });
}
// 获取标题标签
export function getTitleType() {
  return request({
    url: '/system/dict/data/type/title_type',
    method: 'get'
  });
}
// getDictss
export function getDicts(parms) {
  return request({
    url: '/system/dict/data/type/' + parms,
    method: 'get'
  });
}
// 获取地区
export function getRegion() {
  return request({
    url: '/system/dict/data/type/region',
    method: 'get'
  });
}

// 房产查询
export function searchRoom(data) {
  return request({
    url: '/room/selectList',
    method: 'post',
    data: data
  });
}

// 获取合作企业
export function getCooperation() {
  return request({
    url: '/system/dict/data/type/cooperation',
    method: 'get'
  });
}

// 获取房产新闻列表
export function listNews(data) {
  return request({
    url: '/news/selectList',
    method: 'post',
    data: data
  });
}
// 获取评论
export function listApplaud(data) {
  return request({
    url: '/applaud/selectList',
    method: 'post',
    data: data
  });
}

// 查询新闻详情
export function newsDetail(data) {
  return request({
    url: '/news/findById',
    method: 'post',
    data: data
  });
}

// 查询问题
export function listFaq(data) {
  return request({
    url: "/faq/selectList",
    method: "post",
    data: data
  });
}

// /room/selectById

// 查询房产详情
export function roomDetail(data) {
  return request({
    url: "/room/selectById",
    method: "post",
    data: data
  });
}

// 查询地址区域
export function address(data) {
  return request({
    url: "/address/selectList",
    method: "post",
    data: data
  });
}


// 查询地址区域
export function applaudDetail(data) {
  return request({
    url: "/applaud/selectById",
    method: "post",
    data: data
  });
}