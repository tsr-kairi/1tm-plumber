document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.querySelector(".sidebar");
  const listItems = document.querySelectorAll(".sidebar nav ul li");

  listItems.forEach((item) => {
    item.addEventListener("click", function () {
      // Remove active class from all items
      listItems.forEach((li) => li.classList.remove("active"));
      // Add active class to the clicked item
      this.classList.add("active");

      // Change sidebar background based on the clicked item
      sidebar.className = "sidebar"; // Reset classes

      switch (this.textContent.trim()) {
        default:
          sidebar.style.backgroundColor = "#d6186f";
          break;
      }
    });
  });
});
