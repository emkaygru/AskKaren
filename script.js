var adviceurl = "https://cors-anywhere.herokuapp.com/https://badadvice.rest/api/random";
var zomapikey = "eca5d70af5955828b5479ffeed90193f";
var cityname;
var cityid;
var cityarray = [];

$.ajax({
    url: adviceurl,
    method: "GET",
    success: function (response) {
        $("#bad-advice").text('"' + response + '"');
    }
});

$("#city-button").click(function (event) {
    event.preventDefault();
    cityname = $("#city-input").val().trim();
    if (cityname === "") {
        alert("Please enter a city.");
    } else {
        zomatoDisplay();
    }
})

async function zomatoDisplay() {
    cityname = $("#city-input").val().trim();
    var zomatocity = "https://developers.zomato.com/api/v2.1/cities?q=" + cityname + "&apikey=" + zomapikey;
    await $.ajax({
        url: zomatocity,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        $("#city0").attr("data-name", response.location_suggestions[0].id);
        $("#city0").text(response.location_suggestions[0].name);
        $("#city1").attr("data-name", response.location_suggestions[1].id);
        $("#city1").text(response.location_suggestions[1].name);
        $("#city2").attr("data-name", response.location_suggestions[2].id);
        $("#city2").text(response.location_suggestions[2].name);
    })
}

$(".cities").click(function () {
    $("#city0").addClass("hide");
    $("#city1").addClass("hide");
    $("#city2").addClass("hide");
    cityid = $(this).attr("data-name");
    var zomatourl = "https://developers.zomato.com/api/v2.1/search?entity_id=" + cityid + "&entity_type=city&count=5&sort=rating&order=asc&apikey=" + zomapikey;
    $.ajax({
        url: zomatourl,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        // PULL INFO FOR FIRST RESTAURANT
        $("#res-name0").text(response.restaurants[0].restaurant.name);
        $("#res-address0").text(response.restaurants[0].restaurant.location.address);
        $("#res-rating0").text("Rating: " + response.restaurants[0].restaurant.user_rating.aggregate_rating + " (" + response.restaurants[0].restaurant.user_rating.rating_text + ") - " + response.restaurants[0].restaurant.user_rating.votes + " votes");
        $("#res-url0").attr("href", response.restaurants[0].restaurant.url);
        $("#res-url0").text("Link");
        // PULL INFO FOR SECOND RESTAURANT
        $("#res-name1").text(response.restaurants[1].restaurant.name);
        $("#res-address1").text(response.restaurants[1].restaurant.location.address);
        $("#res-rating1").text("Rating: " + response.restaurants[1].restaurant.user_rating.aggregate_rating + " (" + response.restaurants[1].restaurant.user_rating.rating_text + ") - " + response.restaurants[1].restaurant.user_rating.votes + " votes");
        $("#res-url1").attr("href", response.restaurants[1].restaurant.url);
        $("#res-url1").html("Link");
        // PULL INFO FOR THIRD RESTAURANT
        $("#res-name2").text(response.restaurants[2].restaurant.name);
        $("#res-address2").text(response.restaurants[2].restaurant.location.address);
        $("#res-rating2").text("Rating: " + response.restaurants[2].restaurant.user_rating.aggregate_rating + " (" + response.restaurants[2].restaurant.user_rating.rating_text + ") - " + response.restaurants[2].restaurant.user_rating.votes + " votes");
        $("#res-url2").attr("href", response.restaurants[2].restaurant.url);
        $("#res-url2").text("Link");
    })
})