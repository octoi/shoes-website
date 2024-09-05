const configs = {
  black: {
    src: "./assets/black.png",
    colors: {
      background: "black",
      headingColor: "#191919",
      priceColor: "#888888",
      detailColor: "black",
      imageContainer: "#212121",
    },
  },
  red: {
    src: "./assets/red.png",
    colors: {
      background: "#cc0000",
      headingColor: "#cc0000",
      priceColor: "#cc0000",
      detailColor: "#cc0000",
      imageContainer: "red",
    },
  },
  orange: {
    src: "./assets/orange.png",
    colors: {
      background: "#CE5B38",
      headingColor: "#BF6846",
      priceColor: "#F38058",
      detailColor: "#F38058",
      imageContainer: "#CE6F49",
    },
  },
};

const colorOptions = document.querySelectorAll(".color-option");

const root = document.querySelector(":root");

colorOptions.forEach((colorOption) => {
  colorOption.addEventListener("click", () => {
    let color = colorOption.getAttribute("data-color");
    let config = configs[color];

    document.getElementById("product-image").src = config.src;

    root.style.setProperty("--background", config.colors.background);
    root.style.setProperty("--heading-color", config.colors.headingColor);
    root.style.setProperty("--detail-color", config.colors.detailColor);
    root.style.setProperty("--price-color", config.colors.priceColor);
    root.style.setProperty("--image-container", config.colors.imageContainer);
  });
});
