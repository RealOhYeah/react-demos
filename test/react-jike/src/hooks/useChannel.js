/*
 * @Author: Oh...Yeah!!! 614988210@qq.com
 * @Date: 2024-10-15 16:10:48
 * @LastEditors: Oh...Yeah!!! 614988210@qq.com
 * @LastEditTime: 2024-10-15 16:18:07
 * @FilePath: \react-jike\src\hooks\useChannel.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

// 封装获取频道列表的逻辑
import { useState, useEffect } from 'react'
import { getChannelAPI } from '@/apis/article'
function useChannel () {
    // 1. 获取频道列表所有的逻辑
    // 获取频道列表
    const [channelList, setChannelList] = useState([])

    useEffect(() => {
        // 1. 封装函数 在函数体内调用接口
        const getChannelList = async () => {
            const res = await getChannelAPI()
            setChannelList(res.data.channels)
        }
        // 2. 调用函数
        getChannelList()
    }, [])
    // 2. 把组件中要用到的数据return出去
    return {
        channelList
    }
}


export { useChannel }