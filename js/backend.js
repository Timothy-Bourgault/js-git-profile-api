var apiKey = require('./../.env').apiKey;

function GitUser(){
}

GitUser.prototype.getUser = function(username, displayUser) {
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey ).then(function(response) {
    console.log(response);
    // console.log(response.name);
    displayUser(response);
  }).fail(function(error) {
    errorMessageFunction();
    $('#errorMessage').text(error.responseJSON.message);
  });
};

exports.getGitUser = GitUser;
