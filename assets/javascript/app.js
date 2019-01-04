let topics = ["animals", "cars", "houses", "sports"];
	displayButtons();
$("#add-gif").on("click", function(event){
	event.preventDefault();
	let userInput = $("#searchBar").val().trim();
	topics.push(userInput);
	console.log(topics);
	$("#searchBar").val("");
	$(".buttonsDisplay").empty();
	displayButtons();

})
function displayButtons(){
	for(i = 0; i < topics.length; i++){

		let gifButton = $("<button>");
          gifButton.addClass("gif");
          gifButton.attr("data-name", topics[i]);
          gifButton.text(topics[i]);
          $(".buttonsDisplay").append(gifButton);
        }
      }
	function displayGif(){

  		let gif = $(".gif").attr("data-name");
  		let key = "klPo6zVIqSFJBs82gW1NEQAWIL7WaKax";
  		let queryURL = "https://api.giphy.com/v1/gifs/search?" + "api_key=" + key + "&q=" + gif + "&limit=25&offset=0&rating=G&lang=en"

  		$.ajax({
  			 url: queryURL,
  			 method: "GET"
  		   }).then(function(response) {
  			   console.log(response);
			   for (var j = 0; j < response.data.length; j++) {
			   let gifImage = $("<img>").attr("src", response.data[j].images.fixed_height.url);
			   let gifView = $("<div>");
			   gifView.append(gifImage);
			   $(".gifs").prepend(gifView);
		   }
  	})
  	}
$(".gif").on("click", function(){
	$(".gifs").empty();
	displayGif();
})
