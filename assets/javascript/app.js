let topics = ["animals", "cars", "houses", "sports"];
	displayButtons();
$("#add-gif").on("click", function(event){
	event.preventDefault();
	let userInput = $("#searchBar").val().trim();
	topics.push(userInput);
	console.log(topics);
	$("#searchBar").val("");
	displayButtons();

})
function displayButtons(){
	for(i = 0; i < topics.length; i++){
		$(".buttonsDisplay").empty();
		let gifButton = $("<button>");
          gifButton.addClass("gif");
          gifButton.attr("data-name", topics[i]);
          gifButton.text(topics[i]);
          $(".buttonsDisplay").append(gifButton);
        }
      }

function displayGif(){

	let gif = $(this).attr("data-name");
	let queryURL =

	$.ajax({
		 url: queryURL,
		 method: "GET"
	   }).then(function(response) {
})
}
