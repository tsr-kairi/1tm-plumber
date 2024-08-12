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

function goBack() {
  window.history.back();
}

/* (function () {
  var isPageAvailable = checkPageAvailability();

  if (!isPageAvailable) {
    window.location.href = "/pages/franchise/404/404.html";
  } 

  function checkPageAvailability() {
    return false;
  }
})(); */

/* Header JS */
const menuToggle = document.querySelector(".menu-toggle");
const closeButton = document.querySelector(".close-button");
const ctaNav = document.querySelector(".cta-nav");
const nav = document.querySelector("nav");
const dropdownItems = document.querySelectorAll(".nav-links li .dropdown");

// Get the current pathname
const currentPath = window.location.pathname;
const navLinks = document.querySelectorAll("nav ul.nav-links > li > a");

// Remove 'active-nav' from all links
navLinks.forEach((link) => {
  link.classList.remove("active-nav");
});

// Add 'active-nav' to the link that matches the current pathname
navLinks.forEach((link) => {
  if (link.getAttribute("href") === currentPath) {
    link.classList.add("active-nav");
  }
});

function toggleNavHeaderButtons() {
  if (ctaNav.classList.contains("active") || nav.classList.contains("active")) {
    menuToggle.style.display = "none";
    closeButton.style.display = "block";
  } else {
    menuToggle.style.display = "block";
    closeButton.style.display = "none";
  }
}

menuToggle.addEventListener("click", () => {
  ctaNav.classList.toggle("active");
  nav.classList.toggle("active");
  toggleNavHeaderButtons();
});

closeButton.addEventListener("click", () => {
  ctaNav.classList.remove("active");
  nav.classList.remove("active");
  toggleNavHeaderButtons();
});

/* header js */

/* ________________________________________Single Servce JS___________________________________________ */

document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.querySelector(".sidebar");
  const listItems = document.querySelectorAll(".sidebar nav ul li");
  const contentTitle = document.querySelector(".main-content h1");
  const contentText = document.querySelector(".content-text");

  // Content data for each tab
  const contentData = {
    "burst-pipes": {
      title: "Burst Pipes",
      text: "<p>Burst pipes can cause significant damage...</p>",
    },
    burst: {
      title: "Burst",
      text: "<p>Burst is a serious issue that needs immediate attention...</p>",
    },
    "frozen-pipes": {
      title: "Frozen Pipes",
      text: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus scelerisque volutpat nunc, eget congue nibh cursus et. Nullam aliquam, urna blandit tempus posuere, mauris enim consectetur orci, sed ultricies odio mi a elit. Morbi euismod condimentum mauris, sit amet viverra arcu ultrices non. Proin semper lectus id nisi luctus placerat. Fusce ac scelerisque ipsum. Integer lobortis at magna at finibus. Praesent ultrices non ipsum nec consequat.</p> <p>Phasellus molestie vitae mi et lacinia. Duis ut varius tortor, in ornare mauris. Phasellus porta turpis sed augue consequat, vitae sollicitudin magna pretium. Nam vestibulum iaculis quam, eget tempus tellus. Sed lorem ex, aliquet eu turpis non, convallis interdum nunc. Quisque vulputate urna dolor.</p> <p>Etiam viverra eleifend dolor, sed mollis arcu commodo id. Mauris eget ex orci. Etiam sollicitudin est semper nunc ultrices euismod. Fusce pretium iaculis nisi. Vivamus viverra malesuada mauris, ac finibus sapien rutrum id. Maecenas cursus orci non bibendum porta. Curabitur ac velit sit amet arcu blandit rhoncus. Mauris congue accumsan enim at viverra. Quisque suscipit viverra dolor, imperdiet vulputate eros tincidunt eget.</p>",
    },
    "garbage-disposals": {
      title: "Garbage Disposals",
      text: "<p>Garbage disposals are an essential kitchen appliance...</p>",
    },
    "sewer-lines": {
      title: "Sewer Lines",
      text: "<p>Sewer line issues can lead to backups and other problems...</p>",
    },
    "sinks-faucets": {
      title: "Sinks & Faucets",
      text: "<p>Sinks and faucets need regular maintenance...</p>",
    },
    "sump-pumps": {
      title: "Sump Pumps",
      text: "<p>Sump pumps are essential for preventing basement flooding...</p>",
    },
    toilets: {
      title: "Toilets",
      text: "<p>Toilet issues are common but can often be fixed easily...</p>",
    },
    "water-heaters": {
      title: "Water Heaters",
      text: "<p>Water heaters provide the hot water you need for daily life...</p>",
    },
    "water-lines": {
      title: "Water Lines",
      text: "<p>Water line maintenance is crucial to avoid leaks...</p>",
    },
  };

  listItems.forEach((item) => {
    item.addEventListener("click", function () {
      // Remove active class from all items
      listItems.forEach((li) => li.classList.remove("active"));
      // Add active class to the clicked item
      this.classList.add("active");

      // Get the data-tab attribute to identify the clicked tab
      const tab = this.getAttribute("data-tab");

      // Update the content based on the clicked tab
      contentTitle.textContent = contentData[tab].title;
      contentText.innerHTML = contentData[tab].text;

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

/* ________________________________________Single Servce JS___________________________________________ */
/* ________________________________________Projects JS___________________________________________ */
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

/* ____________________________Projects JS___________________________________________ */
