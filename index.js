window.onload = function() {
  var contactBtn = document.getElementById("contactBtn");
  var packageBtn = document.getElementById("packageBtn");
  var linksDiv = document.getElementById("links");
  var placesSection = document.getElementById("places");

  contactBtn.addEventListener("click", function() {
    linksDiv.scrollIntoView({ behavior: "smooth" });
  });

  packageBtn.addEventListener("click", function() {
    placesSection.scrollIntoView({ behavior: "smooth" });
  });
};
