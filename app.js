const gallery = document.querySelector(".gallery");
const overlay = document.querySelector(".overlay");
const overlayImage = overlay.querySelector("img");
const overlayClose = overlay.querySelector(".close");
const imgNum = 13;

/* generating images in the section */
function generateHTML() {
  let imgArray = [];
  for (let i = 1; i < imgNum; i++) {
    imgItem = `
    <div class="item">
      <img src="./images/img-${i}.jpg">
      <div class="item__overlay">
        <button>View</button>
      </div>
    </div>
    `;
    imgArray.push(imgItem);
  }
  array = Array.from(imgArray).join("");
  return array;
}
let result = generateHTML();
gallery.innerHTML = result;

/* enlarge overlay by clicking view button */

function handleClick(e) {
  const src = e.currentTarget.querySelector("img").src;
  overlayImage.src = src;

  overlay.classList.add("open");
}

const items = document.querySelectorAll(".item");

items.forEach((item) => item.addEventListener("click", handleClick));

/* close button */
function close() {
  overlay.classList.remove("open");
}

overlayClose.addEventListener("click", close);
