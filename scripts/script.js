(function () {
  window.onload = function () {
    var frameName = new ds07o6pcmkorn({
      openElementId: "#shielded-logo",
      modalID: "modal",
    });
    frameName.init();
  };
})();

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
// function js__nav() {
//   document.getElementById("nav__dropdown--menu").classList.toggle("show");
// }

function js__nav() {
  var element = document.getElementById("nav__dropdown--menu");
  element.classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("nav__dropdown");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
