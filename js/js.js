/* ----- booking box ----- */

function openBookBox() {
  var bookBox = document.getElementById("bookBox");
  var openBtn = document.getElementById("openBook");

  if(bookBox.style.height != "400px") {
    bookBox.style.height = "400px";
    openBtn.innerHTML = "hide";
  }
  else {
    bookBox.style.height = "0";
    openBtn.innerHTML = "book now!";
  }
}

/* ----- newsletter card ----- */
function showName() {
  var printName = document.getElementById("nsName");
  var name = document.getElementById("inputName").value;
  printName.innerHTML = name;
}

function openNsCard() {
  var nsCard = document.getElementById("nsCard");
  var mainCon = document.getElementById("mainContainer");
  var nav = document.getElementById("navTop");
  var body = document.getElementsByTagName("body")[0];
  var html = document.getElementsByTagName("html")[0];

  nsCard.style.display = "block";
  mainCon.style.opacity = "0.2";
  html.style.overflow = "hidden";
  body.style.overflow = "hidden";
  nav.style.opacity = "0.2";

  showName();
}

function closeNsCard() {
  var nsCard = document.getElementById("nsCard");
  var mainCon = document.getElementById("mainContainer");
  var nav = document.getElementById("navTop");
  var body = document.getElementsByTagName("body")[0];
  var html = document.getElementsByTagName("html")[0];

  nsCard.style.display = "none";
  mainCon.style.opacity = "1";
  html.style.overflow = "auto";
  body.style.overflow = "auto";
  nav.style.opacity = "1";
}

/* ----- slider -----*/

var slideIndex = 1;
showSlides(slideIndex);

function plusSlide(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var slides = document.getElementsByClassName("op-slide");
  var i;


  if(n > slides.length) {
    slideIndex = 1;
  }
  if(n < 1) {
    slideIndex = slides.length;
  }
  for(i=0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[slideIndex-1].style.display = "block";
}
}

/* ----- hamburger -----*/
function openHamburger() {
  var hamburgerBtn = document.getElementById("hamburger");
  var menu = document.getElementById("hamburgerMenu");

  if(menu.style.height !== "200px") {
    menu.style.height = "200px";
  }
  else {
    menu.style.height = "0";
  }
}
