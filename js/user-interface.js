var GitUser = require('./../js/backend.js').gitUserModule;

$(document).ready(function() {
  var currentGitUser = new GitUser();
  $('#inputForm').submit(function(event) {
    event.preventDefault();
    var userName = $('#userName').val();
    $('#userName').val('');
    currentGitUser.getUser(userName);
    $('#showUser').text(userName);
  });
});
