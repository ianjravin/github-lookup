var apiKey = require("./../.env").apiKey;

function Account(username) {
  this.username = username.toString();
}

Account.prototype.getRepos = function(username, displayFunction){
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response){

    displayFunction(response);

  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.accountModule = Account;
