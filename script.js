window.onload( function () {
  setTimeout(
    function open(event) {
      document.querySelector(".popup").styles.display = "block";
    },
    500
  )
});

document.querySelector('#close').addEventListener("click", function () {
  document.querySelector(".popup").styles.display = "none";
});
