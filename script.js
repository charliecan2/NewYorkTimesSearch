$(document).ready(function () {
  var searchButton = $("#searchButton");
  searchButton.on("click", function () {
    
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=q8IV2ARGajfzJ3x9bFZ5INIEnegpbvk5";

    $.ajax({
      url: queryURL,
      method: "GET",
    });
  });
});
