// selectPic();

// var myPix = {ad:"assets/AlcoholicAnonymous.png", ad :"assets/BeckysHOA.png", ad:"assets/eye-spy.png", ad:"assets/FaithsFaithful.png"};
// // var imageAds = JSON.stringify(myPix);

// console.log (myPix);

// function choosePic() {
//      var a = (Math.floor(Math.random() * 4));
//      $("#myPicture1").attr("src", myPix[a]);
//      var b = (Math.floor(Math.random() * 4));
//      $("#myPicture2").attr("src", myPix[b]);
// }

var randnum1 = (Math.floor(Math.random() *2) + 1);
var randnum2 = (Math.floor(Math.random() *3) + 3);

var pic1 = "./assets/pic1.png";
var pic2 = "./assets/pic2.png";
var pic3 = "./assets/pic3.png";
var pic4 = "./assets/pic4.png";
var pic5 = "./assets/pic5.png"


$("#myPicture1").attr("src", ("./assets/pic" + randnum1 +".png"));
$("#myPicture2").attr("src", ("./assets/pic" + randnum2 +".png"));