const tel = document.getElementById("tel");
const fb = document.getElementById("fb");

function myFunction(x) {
  if (x.matches) {
    // If media query matches
    tel.innerHTML = "<i class='fa-solid fa-phone'></i> ";
    fb.innerHTML = "<i class='fa-brands fa-facebook-f'></i> ";
  }
}

var x = window.matchMedia("(max-width: 700px)");
myFunction(x);




        // Get the button
        let mybutton = document.getElementById("backToTopBtn");

        // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function() {
            scrollFunction();
        };

        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }
        }

        // When the user clicks on the button, scroll to the top of the document
        function topFunction() {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
        }