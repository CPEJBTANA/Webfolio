function copyToClipboard(element) {
  const text = element.getAttribute("data-copy");
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert(`Copied: ${text}`);
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
}

const images = document.querySelectorAll(".img");

function clearActiveImage() {
  images.forEach(function (image) {
    image.classList.remove("active");
  });
}

images.forEach(function (image, index) {
  image.onclick = function () {
    event.stopPropagation(); //important to not call the clearActiveImage() on every click
    if (images[index].classList.contains("active")) {
      images[index].classList.remove("active");
    } else {
      clearActiveImage(index);
      images[index].classList.add("active");
    }
  };
});

window.addEventListener("click", () => {
  clearActiveImage();
});
