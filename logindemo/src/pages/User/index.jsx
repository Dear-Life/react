import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd-mobile'

import { reqverify, reqlogout } from '../../api'

export default function User() {
    const [info, setInfo] = useState({})
    const navigate = useNavigate()

    async function _reqverify() {
        const { code, data } = await reqverify()
        if (code === 400) {
            navigate('/login', { replace: true })
        } else {
            setInfo(data)
        }
    }
    async function logout() {
        await reqlogout(info._id)
        navigate('/login', { replace: true })
    }
    useEffect(() => {
        _reqverify()
    }, [])// eslint-disable-line react-hooks/exhaustive-deps
    return (
        <div>
            <img src={info.avatar} alt="" />
            <p>{info.nickName}</p>
            <Button
                block
                color='primary'
                onClick={logout}
            >
                退出登录
            </Button>
        </div>
    )
}
