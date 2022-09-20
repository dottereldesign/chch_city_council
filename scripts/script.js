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

function js__nav__services() {
  var services = document.getElementById("nav__dropdown--menu");
  services.classList.toggle("show");
}

function js__nav__consents() {
  var consents = document.getElementById("nav__dropdown--consents");
  consents.classList.toggle("show");
}

function js__nav__transport() {
  var transport = document.getElementById("nav__dropdown--transport");
  transport.classList.toggle("show");
}

function js__nav__environment() {
  var environment = document.getElementById("nav__dropdown--environment");
  environment.classList.toggle("show");
}

function js__nav__rec() {
  var rec = document.getElementById("nav__dropdown--rec");
  rec.classList.toggle("show");
}

function js__nav__parks() {
  var parks = document.getElementById("nav__dropdown--parks");
  parks.classList.toggle("show");
}

function js__nav__culture() {
  var culture = document.getElementById("nav__dropdown--culture");
  culture.classList.toggle("show");
}

function js__nav__news() {
  var news = document.getElementById("nav__dropdown--news");
  news.classList.toggle("show");
}

function js__nav__council() {
  var council = document.getElementById("nav__dropdown--council");
  council.classList.toggle("show");
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
