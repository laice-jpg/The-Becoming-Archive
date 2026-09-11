const enterButton = document.getElementById("enterButton");
const magazine = document.querySelector(".magazine");

enterButton.addEventListener("click", function () {

    enterButton.disabled = true;

    magazine.classList.add("opening");

    setTimeout(function () {

        window.location.href = "index.html";

    }, 2300);

});
