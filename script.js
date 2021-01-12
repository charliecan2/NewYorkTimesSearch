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

        $("#articleContents").empty();

        for (i = 0; i < +numRecords; i++) {
            var titleDiv = $("<a>");
            titleDiv.attr("href", response.response.docs[i].web_url);
            titleDiv.attr("target", "_blank");
            titleDiv.text("Title: "+ response.response.docs[i].headline.main);
            $("#articleContents").append(titleDiv);
    
            var authorDiv = $("<div>");
            authorDiv.text(response.response.docs[i].byline.original);
            $("#articleContents").append(authorDiv);
    
            var snippet = $("<br><div>");
            snippet.text("Preview: " + response.response.docs[i].snippet);
            $("#articleContents").append(snippet);

            $("<br>").append("#articleContents");
        }

        
    });
  });
});
