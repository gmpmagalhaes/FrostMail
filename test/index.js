var FrostMail = require('../lib');

var client = new FrostMail.Client();

var users = ['users@test.com','users2@test.com','users3@test.com']

var Properties = {
    sendAt: Date.now(),
    sendFrom: "noreply@test.com",
    categorie: "Products"
}

client.sendEmail(users, "<h1>Body</h1>", "Test Subject", Properties);
