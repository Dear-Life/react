import React, { useState, useRef, useEffect } from 'react'

import {
    NavBar,
    Form,
    Input,
    Button,
    Toast
} from 'antd-mobile'
import { useNavigate } from 'react-router-dom'

import { phone_reg, code_reg } from '../../util/reg'
import { reqcode, reqlogin } from '../../api'

export default function Login() {
    const [phone, setPhone] = useState("")
    const [code, setCode] = useState("")
    const [time, setTime] = useState(10)
    const [canClick, setCanClick] = useState(true)

    const timerIdRef = useRef()

    const navigate = useNavigate()

    async function handlelogin() {
        if (phone && code) {
            const { code: vcode } = await reqlogin(phone, code)
            if (vcode === 200) {
                Toast.show({ content: '登录成功' })
                navigate('/user')
            } else {
                Toast.show({ content: '登录失败' })
            }
        }
    }
    async function handlecode() {
        if (!phone) {
            Toast.show({ content: '手机号不合法' })
            return
        }
        setCanClick(false)
        timerIdRef.current = setInterval(function () {
            setTime(time => {
                let newTime = time - 1
                if (newTime <= 0) {
                    newTime = 10
                    setCanClick(true)
                    clearInterval(timerIdRef.current)
                }
                return newTime
            })
        }, 1000);
        await reqcode(phone)
        Toast.show({ content: '发送成功' })
    }

    useEffect(() => {
        return () => {
            clearInterval(timerIdRef.current)
        }
    }, [])

    return (
        <div>
            <NavBar backArrow={false}>登录</NavBar>

            <Form
                footer={
                    <Button
                        block
                        type='submit'
                        color='primary'
                        onClick={handlelogin}
                        disabled={!phone || !code}
                    >
                        登录
                    </Button>
                }
            >
                <Form.Item name='phone'>
                    <Input
                        onChange={val => {
                            if (phone_reg.test(val)) {
                                setPhone(val)
                            } else {
                                setPhone("")
                            }
                        }}
                        placeholder='手机号'
                        clearable
                    />
                </Form.Item>
                <Form.Item
                    name='code'
                    extra={
                        <Button
                            color="primary"
                            fill='none'
                            onClick={handlecode}
                            disabled={!canClick}
                        >{canClick ? "发送验证码" : `${time}s`}</Button>
                    }
                >
                    <Input
                        onChange={val => {
                            if (code_reg.test(val)) {
                                setCode(val)
                            } else {
                                setCode("")
                            }
                        }}
                        placeholder='验证码'
                        clearable
                    />
                </Form.Item>
            </Form>
        </div>
    )
}
