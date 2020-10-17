// ****************  The Karens Heartbit ************************
// global variables



//Main function for Yelp API 





// Main function for Bad advice API 

var adviceurl = "https://cors-anywhere.herokuapp.com/https://badadvice.rest/api/random";

$.ajax({
    url: adviceurl,
    method: "GET",
    success: function(response){
        $("#info").text(response);
    }
});


//



