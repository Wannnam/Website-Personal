// Dari slide2 ke slide3 setelah klik di mana saja
document.getElementById("slide2").addEventListener("click", function () {
  document.getElementById("slide2").style.display = "none";
  document.getElementById("slide3").style.display = "block";
});

// Dari slide3 ke slide4 lewat tombol
document.getElementById("toSlide4").addEventListener("click", function () {
  document.getElementById("slide3").style.display = "none";
  document.getElementById("slide4").style.display = "block";
});