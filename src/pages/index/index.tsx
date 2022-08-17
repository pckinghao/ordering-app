/*
 * @Author: pckinghao 1824455240@qq.com
 * @Date: 2022-08-11 14:17:40
 * @LastEditors: pckinghao 1824455240@qq.com
 * @LastEditTime: 2022-08-17 16:53:07
 * @FilePath: \ordering-app\src\pages\index\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { View, Button } from '@tarojs/components'
import './index.module.scss'

const Index = () => {
  return (
    <View className='index'>
      <View className='logo'></View>
      <Button size='default' plain type='primary' className='loginbtn'>登录</Button>
    </View>
  )
}

export default Index
