// import { } from 'antd'
import logo from '@/assets/logo.png'
import './index.scss'
import { Card, message,Form, Input, Button } from 'antd'
import { fetchLogin } from '@/store/modules/user'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const onFinish = async formValue => {
    await dispatch(fetchLogin(formValue))
    navigate('/')
    message.success('登录成功')
  }

  return (

    
    <div className="login">  
      <Card className="login-container">
        <img className="login-logo" src={logo} alt="" />
        {/* 登录表单 */}
        <Form validateTrigger={['onBlur', 'onChange']} onFinish={onFinish} initialValues={{
          mobile: '13800000002',
          code: '246810',
        }}>
         
          <Form.Item
            name="mobile"
            rules={[
              {
                pattern: /^1[3-9]\d{9}$/,
                message: '手机号码格式不对',
                validateTrigger: 'onBlur'
              },
              { required: true, message: '请输入手机号' }
            ]}>

            <Input size="large" placeholder="请输入手机号" />
            
          </Form.Item>

          <Form.Item
            name="code"
            rules={[
              { required: true, message: '请输入验证码' },
              { len: 6, message: '验证码6个字符', validateTrigger: 'onBlur' }
            ]}
          >
            <Input size="large" placeholder="请输入验证码" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              登录
            </Button>
          </Form.Item>

        </Form>
      </Card>
    </div >
  )
}

export default Login