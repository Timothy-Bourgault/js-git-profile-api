// var apiKey = require('./../.env').apiKey;

function GitUser(){
}

GitUser.prototype.getUser = function(userName) {
  $.get('https://api.github.com/users/' + userName + '?access_token=' + "deb5038e55957593032b746c927587b66520971f").then(function(response) {
    console.log(response);
    // console.log(response.name);
    return response;
  }).fail(function(error) {
    $('#showUser').text(error.responseJSON.message);
  });
};

exports.gitUserModule = GitUser;
