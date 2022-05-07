setMaxDate("f_urodzenie")

const imie = document.querySelector("#f_imie");
const nazwisko = document.querySelector("#f_nazwisko");
const email = document.querySelector("#f_email");
const urodzenie = document.querySelector("#f_urodzenie");
const haslo = document.querySelector("#f_haslo");
const haslo2 = document.querySelector("#f_haslo2");
const opis = document.querySelector("#f_opis");
const submitButton = document.querySelector('input[type=submit]');

console.log(submitButton);

imie.onblur = function() {validateName(imie, "imię")};
nazwisko.onblur = function() {validateName(nazwisko, "nazwisko")};
email.onblur = function() {checkEmail(email)};
urodzenie.onblur = function() {isWhiteSpaceOrEmpty(urodzenie, "data urodzenia")};
haslo.onblur = function() {checkPassword(haslo)};
haslo2.onblur = function() {repeatPassword(haslo, haslo2)};
submitButton.onclick = validate;

function isWhiteSpaceOrEmpty(el, id) {
  if (!/^[\s\t\r\n]*$/.test(el.value)) return false;
  console.log("empty: "+el.value);
  addNotification("Pole " + id + " nie może być puste.");
  showError(el);
  hideError(el);
  return true;
}

function checkString(el, id) {
  if((/[A-Z]{0,1}[a-z]*/.test(el.value))) return false;
  console.log("checkString: "+el.value);
  addNotification("Pole " + id + " zawiera niepoprawną wartość.");
  showError(el);
  return true;
}

function checkEmail(el) {
  if(/^[a-zA-Z_0-9\.]+@[a-zA-Z_0-9\.]+\.[a-zA-Z][a-zA-Z]+$/.test(el.value)) return false;
  console.log("checkEmail: "+el.value);
  addNotification("Pole email zawiera niepoprawną wartość.");
  showError(el);
  return true;
}

function setMaxDate(el){
  let today = new Date().toISOString().split("T")[0];
  let input = document.getElementById(el);
  input.max = today;
}

function checkPassword(el) {
  console.log(el.value);
  if(!/^(?=.*\d)[0-9a-zA-Z]{8,}$/.test(el.value)) return false;
  addNotification("Pole hasło powinno zawierać min. 8 znaków i przynajmniej 1 cyfrę.");
  showError(el);
  return true;
}

function repeatPassword(str1, str2) {
  if (str1 != str2) return true;
  addNotification("Hasła różnią się.");
  showError(el);
  return false;
}

function validate(event) {
  event.preventDefault();
  // const form = document.querySelector('form');
  document.querySelector("#notifications").style.display = "block";
  var notes = document.querySelector("#notifications").children;
  for (var i=0; i<notes.length; i++) {
    notes[i].style.display = "block";
  }
}

// errors
function showError(el) {
  console.log("showError: "+el.value)
  el.style.borderColor = "red";
  var td = document.createElement("td");
  var span = document.createElement("span");
  span.innerHTML = "*";
  span.style.fontSize = "20px"; 
  el.parentElement.appendChild(td.appendChild(span));
}
function hideError(el) {
  console.log("Hide error: "+el.value);
  el.style.borderColor = "rgb(118, 118, 118)";
  var element = el.parentElement.getElementsByTagName("span");
  for (index = element.length - 1; index >= 0; index--) {
    element[index].parentNode.removeChild(element[index]);
}
}

function addNotification(msg) {
  var span = document.createElement("span");
  span.innerHTML = msg;
  span.style.display = "none";
  document.querySelector("#notifications").appendChild(span);
}


function validateName(el, id) {
  isWhiteSpaceOrEmpty(el, id);
  checkString(el, id);
}






