// The Karen's Heart    - Main js File rev 2.0

var adviceurl = "https://cors-anywhere.herokuapp.com/https://badadvice.rest/api/random";
var zomapikey = "eca5d70af5955828b5479ffeed90193f";
var cityname;
var cityid;
var cityarray = [];

// BAD ADVICE API CALL
$.ajax({
    url: adviceurl,
    method: "GET",
    success: function (response) {
        $("#bad-advice").text('"' + response + '"');
    }
});

// SEARCH BUTTON EVENT LISTENER - VALID ENTRY RUNS ZOMATODISPLAY()
$("#city-button").click(function (event) {
    event.preventDefault();
    resetData();
    cityname = $("#city-input").val().trim();
    if (cityname === "") {
        alert("Please enter a city.");
    } else {
      hideCities();
      setTimeout(
        function(){
          zomatoDisplay();
        }, 700);
    }
})

// FUNCTION PULLS INFO FROM TEXT INPUT, GIVES SUGGESTIONS OF
// CITIES THAT MATCH YOUR QUERY
async function zomatoDisplay() {
    cityname = $("#city-input").val().trim();
    var zomatocity = "https://developers.zomato.com/api/v2.1/cities?q=" + cityname + "&apikey=" + zomapikey;
    await $.ajax({
        url: zomatocity,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        showCities();
        hideRestaurants();
        $("#city0").attr("data-name", response.location_suggestions[0].id);
        $("#city0").text(response.location_suggestions[0].name);
        $("#city1").attr("data-name", response.location_suggestions[1].id);
        $("#city1").text(response.location_suggestions[1].name);
        $("#city2").attr("data-name", response.location_suggestions[2].id);
        $("#city2").text(response.location_suggestions[2].name);
    })
}

// UPON CLICKING YOUR CITY OF CHOICE, POPULATES WITH RESTAURANT INFORMATION
$(".cities").click(function () {
    hideCities();
    hideRestaurants();
    cityid = $(this).attr("data-name");
    var zomatourl = "https://developers.zomato.com/api/v2.1/search?entity_id=" + cityid + "&entity_type=city&count=5&sort=rating&order=asc&apikey=" + zomapikey;
    $.ajax({
        url: zomatourl,
        method: "GET"
    }).then(function (response) {
        console.log(response);
                      setTimeout(
        function(){
          showRestaurants();
          // PULL INFO FOR FIRST RESTAURANT
          $("#res-name0").text(response.restaurants[0].restaurant.name);
          $("#res-address0").text(response.restaurants[0].restaurant.location.address);
          $("#res-rating0").text("Rating: " + response.restaurants[0].restaurant.user_rating.aggregate_rating + " (" + response.restaurants[0].restaurant.user_rating.rating_text + ") - " + response.restaurants[0].restaurant.user_rating.votes + " votes");
          $("#res-url0").attr("href", response.restaurants[0].restaurant.url);
          $("#res-url0").text("Speak to a Manager");
          $("#res-url0").prepend("<i class='far fa-phone'></i> ");
          // PULL INFO FOR SECOND RESTAURANT
          $("#res-name1").text(response.restaurants[1].restaurant.name);
          $("#res-address1").text(response.restaurants[1].restaurant.location.address);
          $("#res-rating1").text("Rating: " + response.restaurants[1].restaurant.user_rating.aggregate_rating + " (" + response.restaurants[1].restaurant.user_rating.rating_text + ") - " + response.restaurants[1].restaurant.user_rating.votes + " votes");
          $("#res-url1").attr("href", response.restaurants[1].restaurant.url);
          $("#res-url1").text("Speak to a Manager");
          $("#res-url1").prepend("<i class='far fa-phone'></i> ");
          // PULL INFO FOR THIRD RESTAURANT
          $("#res-name2").text(response.restaurants[2].restaurant.name);
          $("#res-address2").text(response.restaurants[2].restaurant.location.address);
          $("#res-rating2").text("Rating: " + response.restaurants[2].restaurant.user_rating.aggregate_rating + " (" + response.restaurants[2].restaurant.user_rating.rating_text + ") - " + response.restaurants[2].restaurant.user_rating.votes + " votes");
          $("#res-url2").attr("href", response.restaurants[2].restaurant.url);
          $("#res-url2").text("Speak to a Manager");
          $("#res-url2").prepend("<i class='far fa-phone'></i> ");
        }, 700);
    })
})



// I'M FEELING ENTITLED BUTTON
$("#entitled-button").click(function (event) {
    event.preventDefault();
    resetData();
    cityname = $("#city-input").val().trim();
    if (cityname === "") {
        alert("Please enter a city.");
    } else {
      hideCities();
      setTimeout(
        function(){
          entitledDisplay();
        }, 700);
    }
})

// FUNCTION PULLS INFO FROM TEXT INPUT, GIVES SUGGESTIONS OF
// CITIES THAT MATCH YOUR QUERY - FOR ENTITLED BUTTON
async function entitledDisplay() {
    cityname = $("#city-input").val().trim();
    var zomatocity = "https://developers.zomato.com/api/v2.1/cities?q=" + cityname + "&apikey=" + zomapikey;
    await $.ajax({
        url: zomatocity,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        hideCities();
        showEntitledCities();
        hideRestaurants();
        $("#city3").attr("data-name", response.location_suggestions[0].id);
        $("#city3").text(response.location_suggestions[0].name);
        $("#city4").attr("data-name", response.location_suggestions[1].id);
        $("#city4").text(response.location_suggestions[1].name);
        $("#city5").attr("data-name", response.location_suggestions[2].id);
        $("#city5").text(response.location_suggestions[2].name);
    })
}

// UPON CLICKING YOUR CHOICE OF CITY, DISPLAYS INFO FOR A RANDOM
// RESTAURANT FROM A LIST OF THE 16 WORST RESTAURANTS IN YOUR AREA
$(".cities-ent").click(function () {
    cityid = $(this).attr("data-name");
    hideCities();
    var zomatourl = "https://developers.zomato.com/api/v2.1/search?entity_id=" + cityid + "&entity_type=city&count=50&sort=rating&order=asc&apikey=" + zomapikey;
    $.ajax({
        url: zomatourl,
        method: "GET"
    }).then(function (response) {
        // PULL INFO FOR RANDOM RESTAURANT
        var randomRestaurant = (Math.floor(Math.random() * 15) + 1);
        console.log(randomRestaurant);
              setTimeout(
        function(){
          showEntitled();
          $("#res-name0").text(response.restaurants[randomRestaurant].restaurant.name);
          $("#res-address0").text(response.restaurants[randomRestaurant].restaurant.location.address);
          $("#res-rating0").text("Rating: " + response.restaurants[randomRestaurant].restaurant.user_rating.aggregate_rating + " (" + response.restaurants[0].restaurant.user_rating.rating_text + ") - " + response.restaurants[0].restaurant.user_rating.votes + " votes");
          $("#res-url0").attr("href", response.restaurants[randomRestaurant].restaurant.url);
          $("#res-url0").text("Speak to a Manager");
          $("#res-url0").prepend("<i class='far fa-phone'></i> ");
        }, 700);
    })
})

// REMOVES THE 'HIDE' CLASS FOR THE CITY SELECTION
function showCities(){
  $(".cities").each(function(){
    $(this).removeClass("hide");
  })
}

function showEntitledCities(){
  $(".cities-ent").each(function(){
    $(this).removeClass("hide");
  })
}

// ADDS THE 'HIDE' CLASS FOR THE CITY SELECTION
function hideCities(){
  $(".cities").each(function(){
    $(this).addClass("hide");
  })
  $(".cities-ent").each(function(){
    $(this).addClass("hide");
  })
}

// REMOVES THE 'HIDE' CLASS FOR RESTAURANT INFO DIVS
function showRestaurants(){
  $(".res-box").each(function(){
    $(this).removeClass("hide");
  })
}

// ADDS THE 'HIDE' CLASS FOR RESTAURANT INFO DIVS
function hideRestaurants(){
  $(".res-box").each(function(){
    $(this).addClass("hide");
  })
}

// REMOVES THE 'HIDE' CLASS FOR FIRST RESTAURANT DIV, FOR ENTITLED BUTTON
function showEntitled(){
  $(".res-entitled").removeClass("hide");
  $("#restaurant1").empty();  
  $("#restaurant2").empty();

}

// SETS THE TEXT VALUE FOR EACH ITEM RESULTED WITH INFO-DISPLAY CLASS
// WHICH IS ALL THE DATA FROM THE ZOMATO API - RESETS EVERYTHING
function resetData(){
  $(".info-display").each(function(){
    $(this).text("");
  })
}
