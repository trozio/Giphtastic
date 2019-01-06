let topics = ["ANIMALS", "CARS", "CATS", "SPORTS"];
	displayButtons();
$("#add-gif").on("click", function(event){
	event.preventDefault();
	let userInput = $("#searchBar").val().trim().toUpperCase();
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
	$(".gif").on("click", function(){
		$(".gifs").empty();
		let gif = $(this).attr("data-name");
		let state = $(this).attr("data-state");
		let key = "klPo6zVIqSFJBs82gW1NEQAWIL7WaKax";
		let queryURL = "https://api.giphy.com/v1/gifs/search?" + "api_key=" + key + "&q=" + gif + "&limit=25&offset=0&rating=G&lang=en"

		$.ajax({
			 url: queryURL,
			 method: "GET"
		   }).then(function(response) {
			   console.log(response);
			   for (var j = 0; j < 10; j++) {
			   let gifImage = $("<img>").attr("src", response.data[j].images.fixed_height.url);
			   let gifView = $("<div>");
			   let rating = "Rating: " + response.data[j].rating.toUpperCase();
			   gifView.append(gifImage);
			   gifView.append(rating);
			   $(".gifs").prepend(gifView);

											}
										})
									})

								}
$("reset").on("click", function(){
	$(".buttonsDisplay").empty();
})
