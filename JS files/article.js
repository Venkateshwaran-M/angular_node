const arrow = document.querySelector(".arrow");
const share = document.querySelector(".share");

arrow.addEventListener("click", function () {
    share.classList.toggle("show");
});