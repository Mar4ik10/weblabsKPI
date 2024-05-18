window.addEventListener("click", function(event) {
    var placeDiv = document.getElementById("place");
    var clickedInside = placeDiv.contains(event.target);

    console.log(clickedInside);
});