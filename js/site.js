// // Get the container element
// var navbarNav = document.getElementById("navbar-nav");

// // Get all buttons with class="btn" inside the container
// var navItems = navbarNav.getElementsByClassName("nav-item");

// // Loop through the buttons and add the active class to the current/clicked button
// for (var i = 0; i < navItems.length; i++) {
//     navItems[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }

// $(document).ready(function(){
//     $('.navbar-nav .nav-item').click(function(){
//         $('.navbar-nav .nav-item').removeClass('active');
//         $(this).addClass('active');
//     })
//     });

// $(document).ready(function() {
//     $(document).on('click', '.nav-item a', function (e) {
//         $(this).parent().addClass('active').siblings().removeClass('active');
//     });
// });

// $(function () {
//     // this will get the full URL at the address bar
//     var url = window.location.href;
//     // passes on every "a" tag
//     $(".navbar-nav .myItemLink").each(function () {
//       // checks if its the same on the address bar
//       if (url == (this.href)) {
//         $(this).closest("li").addClass("active");
//         //for making parent of submenu active
//         $(this).closest("li").parent().parent().addClass("active");
//       }
//     });
//   });
