const progress = document.getElementById("progress");
const button = document.querySelector("button");
const buttonContent = document.querySelector(".button-content");
const number = Math.floor(Math.random() * 2);
let i = 0;
let width = 0;

function increment() {
  this.setAttribute("aria-pressed", true);
  this.removeEventListener("click", increment);
  if (i === 0) {
    const id = setInterval(frame, 20);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
        width = 0;
        button.classList.remove("default");
        if (number === 0) {
          button.classList.add("success");
          buttonContent.innerHTML = `
            <span class="button-text">
            SUCCESS
            </span>
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
            d="M21.7237 3.3905L7.99978 17.1144L2.27582 11.3904C1.75449 10.8691 0.910494 10.8691 0.390497 11.3904C-0.129499 11.9118 -0.130832 12.7558 0.390497 13.2758L7.05712 19.9424C7.57845 20.4637 8.42244 20.4637 8.94244 19.9424L23.609 5.27582C24.1303 4.75449 24.1303 3.91049 23.609 3.3905C23.0877 2.8705 22.2437 2.86917 21.7237 3.3905V3.3905Z" />
            </svg>
            `;
        } else {
          button.classList.add("error");
          buttonContent.innerHTML = `
            <span class="button-text">
            ERROR
            </span>
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
            d="M0.502696 2.92661L9.57609 12L0.502696 21.0734C-0.167565 21.7437 -0.167565 22.8288 0.502696 23.4973C1.17296 24.1659 2.25806 24.1676 2.92661 23.4973L12 14.4239L21.0734 23.4973C21.7437 24.1676 22.8288 24.1676 23.4973 23.4973C24.1659 22.827 24.1676 21.7419 23.4973 21.0734L14.4239 12L23.4973 2.92661C24.1676 2.25635 24.1676 1.17124 23.4973 0.502696C22.827 -0.165851 21.7419 -0.167565 21.0734 0.502696L12 9.57609L2.92661 0.502696C2.25635 -0.167565 1.17124 -0.167565 0.502696 0.502696C-0.165851 1.17296 -0.167565 2.25806 0.502696 2.92661Z" />
            </svg>
            `;
        }
      } else {
        width++;
      }
      progress.style.width = width + "%";
    }
  }
}

button.addEventListener("click", increment);
