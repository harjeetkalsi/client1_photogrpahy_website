/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("mySidenav");
    if (x.className === "side-bar") {
      x.className += " responsive";
    } else {
      x.className = "side-bar";
    }
  }