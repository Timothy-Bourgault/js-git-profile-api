// var apiKey = require('./../.env').apiKey;

function GitUser(){
}

GitUser.prototype.getRepos = function(username, displayRepos) {
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + "d32b1b6f4e36014e8b7e4997fc3ebca91886feb3" ).then(function(response) {
    displayRepos(response);
  }).fail(function(error) {
    $('#errorMessage').text(error.responseJSON.message);
  });
};

GitUser.prototype.getUser = function(username, displayUser) {
  $.get('https://api.github.com/users/' + username + '?access_token=' + "d32b1b6f4e36014e8b7e4997fc3ebca91886feb3" ).then(function(response) {
    displayUser(response);
  }).fail(function(error) {
    $('#errorMessage').text(error.responseJSON.message);
  });
};

exports.getGitUser = GitUser;
