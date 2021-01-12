$(document).ready(function () {
  var searchButton = $("#searchButton");
  searchButton.on("click", function (event) {
    event.preventDefault();
    
    var searchTerm = $("#searchTerm").val();
    var startYear = $("#startYear").val();
    var endYear = $("#endYear").val();
    var numRecords = $("#numRecords").val();

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=q8IV2ARGajfzJ3x9bFZ5INIEnegpbvk5";

    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function(response){
        console.log(response.response);
        var titleDiv = $("<div>");
        titleDiv.text("Title: "+ response.response.docs[0].headline.main);
        $("#articleContents").append(titleDiv);

        var authorDiv = $("<div>");
        authorDiv.text(response.response.docs[0].byline.original);
        $("#articleContents").append(authorDiv);

        var snippet = $("<br><div>");
        snippet.text("Preview: " + response.response.docs[0].snippet);
        $("#articleContents").append(snippet);
    });
  });
});
