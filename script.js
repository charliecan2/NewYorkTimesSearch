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
        console.log(response);
    });
  });
});
