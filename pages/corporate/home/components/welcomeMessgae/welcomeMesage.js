document.addEventListener("DOMContentLoaded", function () {
  var readMoreBtn = document.getElementById("read-more-btn");
  var textContent = document.getElementById("text-content");

  readMoreBtn.addEventListener("click", function () {
    textContent.classList.toggle("show-more");

    if (textContent.classList.contains("show-more")) {
      readMoreBtn.textContent = "Read Less";
    } else {
      readMoreBtn.textContent = "Read More About Us";
    }
  });
});
