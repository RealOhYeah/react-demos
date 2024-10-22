/*
 * @Author: Oh...Yeah!!! 614988210@qq.com
 * @Date: 2024-10-09 17:27:06
 * @LastEditors: Oh...Yeah!!! 614988210@qq.com
 * @LastEditTime: 2024-10-11 17:09:31
 * @FilePath: \react-jike\src\components\Auth\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { getToken } from '@/utils'
import { Navigate } from 'react-router-dom'

const AuthRoute = ({ children }) => {
  const isToken = getToken()
  if (isToken) {
    return <>{children}</>
  } else {
    //具体来说，这段代码的作用是导航到名为/login的路由，并且使用replace选项。这意味着导航到/login路由时，不会在导航历史中添加新的记录，而是替换当前的路由。换句话说，用户点击返回按钮时，不会返回到之前的路由，而是直接退出应用。
 
    return <Navigate to="/login" replace />
  }
}

export default AuthRoute
