console.log('hello');

 $(document).ready(function (){
      $('.submit').click(function (event) {
          var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

          var email = $('.email').val();
          var subject = $('.subject').val();
          var message = $('.message').val();
          var statusElm =  document.getElementById("contact-status");
          
          if ( !re.test(email) ) {
              event.preventDefault();
              statusElm.innerHTML = "<div>Email is NOT valid</div>";
          }
          else if (subject.length < 2) {
              event.preventDefault();
              statusElm.innerHTML = "<div>Subject is too short</div>";
          }
          else if (message.length < 10 ) {
              event.preventDefault();
              statusElm.innerHTML = "<div>Message is too short</div>";
          }
          else {
              statusElm.innerHTML = "<div>Thank You! We'll get back you soon. </div>";
          }
      });
     
 });