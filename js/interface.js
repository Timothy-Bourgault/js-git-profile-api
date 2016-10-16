var GitUser = require('./../js/backend.js').gitUserModule;

$(document).ready(function) {
  var newGitUser = new GitUser();
  $('#inputForm').submit(function(event) {
    event.preventDefault();
    var userName = $('#userName').val();

  })
}
