window.addEventListener("load", function () {
  setTimeout(
    function open(event) {
      document.querySelector(".popup").styles.display = "block";
    },
    1000
  )
});

document.querySelector('#close').addEventListener("click", function () {
  document.querySelector(".popup").styles.display = "none";
});
