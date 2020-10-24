///My code $preloader  version 2.0

$(document).ready(function (){
    
    $("#city-button").click(function (event) {
        event.preventDefault(); 
    callSpinner();
    Tup=setTimeout(clean,1000); // waits 1 second when searching for the city. 
    });

    $(".cities").click(function (event) {
        event.preventDefault(); 
    callSpinner();
    Tup=setTimeout(clean,1200); // waits 1.2 second when the city is selected for the city. 
    })
    function callSpinner(){
        var diva=$("<div class='preloader-wrapper big active'>");
        var classes=["spinner-blue'>","spinner-red'>","spinner-yellow'>","spinner-green'>"]
        for(i=0;i<4;i++){
            var div2=$("<div class='spinner-layer "+classes[i]);
            var div3=$("<div class='circle-clipper left'>");
            var div4=$("<div class='circle'>");
            var div5=$("<div class='gap-patch'>");
            var div6=$("<div class='circle'>");
            var div7=$("<div class='circle-clipper right'>");
            var div8=$("<div class='circle'>");
            div3.append(div4);
            div5.append(div6);
            div7.append(div8);
            div2.append(div3).append(div5).append(div7);
            diva.append(div2)
            $(".preloader").append(diva);
        }
        
    
    }
    
    function clean() {
        $(".preloader").empty();
    }
    
    });