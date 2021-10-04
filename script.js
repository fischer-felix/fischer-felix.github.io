/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function hamburgermenu() {
    var x =document.getElementById("navbar");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}