/*
 * @Author: pckinghao 1824455240@qq.com
 * @Date: 2022-08-11 14:17:40
 * @LastEditors: pckinghao 1824455240@qq.com
 * @LastEditTime: 2022-08-17 16:12:03
 * @FilePath: \ordering-app\src\app.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Component } from 'react'
import './app.scss'

class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children
  }
}

export default App
