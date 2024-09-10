document.addEventListener("DOMContentLoaded", function() {
    const flowerGif = document.querySelector(".flower-gif");
    const newYearMessage = document.querySelector(".new-year-message");
    const fireworks = document.getElementById("fireworks");
    
    // After the flower GIF animation completes (5 seconds), show the fireworks and New Year message
    flowerGif.addEventListener("animationend", () => {
      setTimeout(() => {
        fireworks.style.opacity = 1; // Display fireworks after flower finishes blooming
        newYearMessage.style.display = "flex"; // Show the New Year message
      }, 2000); // 2 seconds after the flower finishes blooming
    });
  });