(function() {
'use strict';
window.addEventListener('load', function() {
// Fetch all the forms we want to apply custom Bootstrap validation styles to
var forms = document.getElementsByClassName('needs-validation');
// Loop over them and prevent submission
var validation = Array.prototype.filter.call(forms, function(form) {
form.addEventListener('submit', function(event) {
if (form.checkValidity() === false) {
event.preventDefault();
event.stopPropagation();
}
form.classList.add('was-validated');
}, false);
});
}, false);
})();






// Example starter JavaScript for disabling form submissions if there are invalid fields
    (function() {
      'use strict';
      window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');

        // check match

        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
          form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            var email = $("#email").val();
            var confirmemail = $("#confirm_email").val();
            if(email !== confirmemail){ 
            form.classList.add('was-validated');
              $("#validate").html("Email Should Match");
              $("#validate").addClass("error");
               $("#confirm_email").addClass("error-text");
              event.preventDefault();
              event.stopPropagation();              
            }
            else{
            $("#validate").removeClass("error");
            form.classList.add('was-validated');
               $("#confirm_email").removeClass("error-text");
              $("#validate").html("Looks Good!");
            }
           
          }, false);
        });
      }, false);
    })();