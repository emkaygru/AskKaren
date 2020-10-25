/// Helper manager, version 2.0
//===================================
//          USE THIS ELEMENT ON HTML

//      <div class="mymodal"></div>

//  ===================================
 $(document).ready(function(){
        var maina=$("<a id='mod' class='waves-effect waves-light btn modal-trigger modal-btn' href='#modal1'><i class='fad fa-question question'></i>")
    $(".mymodal").append(maina) 
       $("#mod").click(function (){
            showModal(); 
        $('.modal').modal();
       $('#modal1').modal('open');
      $('#cls').click(function(){
          $('#modal1').modal('close');
      });
          })
               });

function showModal(){
     // <!-- Modal Structure -->
    var div2=$("<div id='modal1' class='modal modal-fixed-footer'>")
      var div3=$("<div class='modal-content'>")
            //tex structure goes here
           var h4=$("<h4>Welcome to askKaren!</h4>"); // modal title goes here
           var spc1=$("<p>");// break space
           var txt1=$("<p class='modaltext'> Here, you can search for restaurants near you! But not just any restaurant - only the lowest rated restaurants near you. We know, as a Karen, you expect only the best for you and your family and because of this, we only show you the lowest rated places near you. View the low score, click on the link the view the restaurant’s website and easily click a button to speak with a manager.</p>");
           var spc2=$("<p>");// break space
           var h7=$("<h7>We built this app with you in mind.</h7>");
           var spc3=$("<p>");// break space
           var spc4=$("<p>");// break space
           var ol1=$("<ol type='a'>");
           var li1=$("<li>Search for your city</li>");
           var li2=$("<li>Click on Your city</li>");
           var li3=$("<li>View the top 5 lowest rated restaurants closest to you</li>");
           var li4=$("<li>And click to view more information about that restaurant</li>");
           var dv=$("<div class='modal-footer'>");
           var aa1=$("<a href='#!' id='yei' class='modal-close waves-effect waves-green btn-flat'>Ok</a>"); // Agree</a>
           
            div3.append(h4).append(spc1).append(txt1).append(spc2).append(h7).append(spc3).append(spc4).append(ol1);
            ol1.append(li1).append(li2).append(li3).append(li4);
            dv.append(aa1);
            div2.append(div3).append(dv);
            $(".mymodal").append(div2);   
 };
