import request from './ajax'

function reqcode(phone) {
    return request.post('/code', { phone })
}

function reqlogin(phone, code) {
    return request.post('/login', { phone, code })
}

function reqverify() {
    return request.post('/verify')
}

function reqlogout(id) {
    return request.post('/logout', { id })
}

export {
    reqcode,
    reqlogin,
    reqverify,
    reqlogout
}