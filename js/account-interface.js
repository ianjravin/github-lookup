var Account = require("./../js/account.js").accountModule;

var displayResults = function(repos) {
  repos.forEach(function(repo){
    $('#results').append("<li><span class='repo-li'>" + repo.name + "</span></li>");
    $(".repo-li").last().click(function(){
      $(".repo-details").show();
      $(".repo-details h2").text(repo.name);
      $("#link").html('<a href=' + repo.svn_url + '>' + repo.svn_url+ '</a>');
      $("#issues").text("Open Issues: " + repo.open_issues);
      $("#watchers").text("Watchers: " + repo.watchers);
      $("#last-update").text("Last Updated: " + repo.updated_at);
    });
  });
};

$(document).ready(function() {

  $('#account-form').submit(function(event) {
    event.preventDefault();
    $("#results").empty();
    var username = $("#u-name").val();
    $("#u-name").val("");
    $("#name").text(username);
    var newAccount = new Account(username);
    newAccount.getRepos(newAccount.username, displayResults);
  });

});
