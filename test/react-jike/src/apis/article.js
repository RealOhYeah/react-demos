/*
 * @Author: Oh...Yeah!!! 614988210@qq.com
 * @Date: 2024-10-13 22:58:30
 * @LastEditors: Oh...Yeah!!! 614988210@qq.com
 * @LastEditTime: 2024-10-17 15:43:27
 * @FilePath: \react-jike\src\apis\article.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 封装和文章相关的接口函数

import { http } from "@/utils"

// 1. 获取频道列表
export function getChannelAPI () {
  return http({
    url: '/channels',
    method: 'GET'
  })
}

// 2. 提交文章表单

export function createArticleAPI (data) {
  return http({
    url: '/mp/articles?draft=false',
    method: 'POST',
    data
  })
}

// 更新文章表单 
export function updateArticleAPI (data) {
  return http({
    url: `/mp/articles/${data.id}?draft=false`,
    method: 'PUT',
    data
  })
}


// 获取文章列表

export function getArticleListAPI (params) {
  return http({
    url: "/mp/articles",
    method: 'GET',
    params
  })
}


// 删除文章
export function delArticleAPI (id) {
  return http({
    url: `/mp/articles/${id}`,
    method: 'DELETE'
  })
}


// 获取文章详情
export function getArticleById (id) {
  return http({
    url: `/mp/articles/${id}`
  })
}

