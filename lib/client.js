const axios = require('axios');
const { default: Axios } = require('axios');

const env = "http://localhost:2443/api/v1"

class Client{
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    sendEmail(UsersList, Template, Subject, Properties){
        const token = Buffer.from(`${this.username}:${this.password}`, 'utf8').toString('base64');
        const config = {
            headers: {
                'Authorization': `Basic ${token}`
            }
        }
        Axios.post(env + '/mail', config, { UsersList: UsersList, Template:Template, Subject:Subject, Properties:Properties })
        .then(function (response) {
            return response.data;
        })
    }
}


module.exports = Client;
