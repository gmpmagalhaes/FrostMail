const axios = require('axios');
const { default: Axios } = require('axios');

const env = "http://localhost:2443/api/v1"

function Client(){

}

Client.prototype._authenticatedRequest = function(options) {
    return "NotGood";
}

Client.prototype.sendEmail = function(UsersList, Template) {
    this._authenticatedRequest();

    Axios.post(env + '/mail', { UsersList: UsersList, Template:Template })
    .then(function (response) {
        console.log(response);
    })
}

module.exports = Client;