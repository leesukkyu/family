var INI = {
    DB_USER: 'ansua86',
    DB_PASSWORD: 'tjrrnddl1!',
    'X-NCP-auth-key': 'JsSMI1pqn5oMKHdpXMsM',
    'X-NCP-service-secret': 'ad0a6a0338434b51ad57b11fb79de8ee',
    MAIL_ID : 'ansua86@naver.com',
    MAIL_PASSWORD : 'tjrrnddl1!'
}

INI.DB_URL = 'mongodb+srv://' + INI.DB_USER + ':' + INI.DB_PASSWORD + '@sdm-pmbuu.mongodb.net/test?retryWrites=true'

module.exports = INI;