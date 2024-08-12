var acc = document.getElementsByClassName("accordion");

for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    var icon = this.querySelector(".toggle-icon");

    if (panel.style.display === "block") {
      panel.style.display = "none";
      icon.src = "/assets/faq/plus.svg"; // Change back to plus icon
      icon.alt = "Plus";
    } else {
      panel.style.display = "block";
      icon.src = "/assets/faq/minus.svg"; // Change to minus icon
      icon.alt = "Minus";
    }
  });
}
