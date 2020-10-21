///My code $preloader


$(document).ready(function (){
    
$("#city-button").click(function (event) {
    event.preventDefault();
    
console.log("test");
    var div1=$("<div class='preloader-wrapper big active'>");

    var div2=$("<div class='spinner-layer spinner-blue'>");
    var div3=$("<div class='circle-clipper left'>");
    var div4=$("<div class='circle'>");
    var div5=$("<div class='gap-patch'>");
    var div6=$("<div class='circle'>");
    var div7=$("<div class='circle-clipper right'>");
    var div8=$("<div class='circle'>");
 div2.append(div3).append(div4);
 div5.append(div6);
 div7.append(div8);
    
    
    var div9=$("<div class='spinner-layer spinner-red'>");
    var div10=$("<div class='circle-clipper right'>");
    var div11=$("<div class='circle'>");
    var div12=$("<div class='gap-patch'>");
    var div13=$("<div class='circle'>");
    var div14=$("<div class='circle-clipper right'>");
    var div15=$("<div class='circle'>");
div9.append(div10).append(div11);
div12.append(div13);
div14.append(div15);    
    
    
    var div16=$("<div class='spinner-layer spinner-yellow'>");
    var div17=$("<div class='circle-clipper left'>");
    var div18=$("<div class='circle'>");
    var div19=$("<div class='gap-patch'>");
    var div20=$("<div class='circle'>");
    var div21=$("<div class='circle-clipper right'>");
    var div22=$("<div class='circle'>");
div16.append(div17).append(div18);
div19.append(div20);
div21.append(div22); 
    
    
    
    var div24=$("<div class='spinner-layer spinner-green'>");
    var div25=$("<div class='circle-clipper left'>");
    var div26=$("<div class='circle'>");
    var div27=$("<div class='gap-patch'>");
    var div28=$("<div class='circle'>");
    var div29=$("<div class='circle-clipper right'>");
    var div30=$("<div class='circle'>");
div24.append(div25).append(div26);
div27.append(div28);
div29.append(div30); 

div1.append(div2);
div1.append(div9);
div1.append(div16);
div1.append(div24);

$(".preloader").append(div1);






})




});