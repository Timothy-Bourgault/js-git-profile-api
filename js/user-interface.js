var GitUser = require('./../js/backend.js').getGitUser;

var displayRepos = function(response) {
  for (var i = 0; i < response.length; i++) {
    $('#userRepos').append("<li>" + response[i].name + " <b>Description: </b>" + response[i].description + "</li>");
  }
};

var displayUser = function(response) {
  $('#showUser').text('');
  $('#showUser').append("<h2>" + response.name + "</h2>");
  $('#showUser').append("<img src='" + response.avatar_url +"' class='img-responsive img-thumbnail' asl='GitHub Avatar'>");
  $('#showUser').append("<p>Joined GitHub " + moment(response.created_at).format('LLL') + "</p>");
  $('#showUser').append("<h3>" + response.email + "</h3>");
};

$(document).ready(function() {
  var currentGitUser = new GitUser();
  $('#searchBtn').click(function() {
    event.preventDefault();
    var userName = $('#userName').val();
    $('#userName').val('');
    $('#userRepos').val('');
    currentGitUser.getUser(userName, displayUser);
    currentGitUser.getRepos(userName, displayRepos);
  });
});
