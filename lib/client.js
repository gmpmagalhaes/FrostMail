const axios = require('axios');
const { default: Axios } = require('axios');

const env = "http://localhost:2443/api/v1"

class Client{
    sendEmail(UsersList, Template, Subject, Properties){
        Axios.post(env + '/mail', { UsersList: UsersList, Template:Template, Subject:Subject, Properties:Properties })
        .then(function (response) {
            return response.data;
        })
    }
}


module.exports = Client;