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
      listItems.forEach((li) => li.classList.remove("active-element"));
      // Add active class to the clicked item
      this.classList.add("active-element");

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
