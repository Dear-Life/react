import Mock from 'mockjs'

Mock.mock('/code', function () {
    return {}
})

Mock.mock('/login', function ({ body }) {
    const { phone, code } = JSON.parse(body)
    if (+code === 111111) {
        document.cookie = `token=${phone}`
        return { code: 200 }
    }
    return { code: 400 }
})

Mock.mock('/verify', function () {
    const cookie = document.cookie
    if (cookie) {
        return {
            code: 200, data: {
                avatar: "https://picsum.photos/100/100",
                nickName: "哈哈",
                phone: '11111111111',
                username: 'aa',
                _id: 100
            }
        }
    }
    return { code: 400 }
})

Mock.mock('/logout', function () {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    return { code: 200 }
})