document.querySelectorAll(".pro-pagination a.pro-page").forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();

    // Remove active class from all page links
    document.querySelectorAll(".pro-pagination a.pro-page").forEach((page) => {
      page.classList.remove("pro-active");
    });

    // Add active class to the clicked page link
    this.classList.add("pro-active");
  });
});

document.querySelector(".pro-prev").addEventListener("click", function (e) {
  e.preventDefault();
  const activePage = document.querySelector(".pro-pagination a.pro-active");
  const prevPage = activePage.previousElementSibling;

  if (prevPage && prevPage.classList.contains("pro-page")) {
    activePage.classList.remove("pro-active");
    prevPage.classList.add("pro-active");
  }
});

document.querySelector(".pro-next").addEventListener("click", function (e) {
  e.preventDefault();
  const activePage = document.querySelector(".pro-pagination a.pro-active");
  const nextPage = activePage.nextElementSibling;

  if (nextPage && nextPage.classList.contains("pro-page")) {
    activePage.classList.remove("pro-active");
    nextPage.classList.add("pro-active");
  }
});
