const submitButton = document.querySelector('#przeslij');
submitButton.onclick = validate;

function isWhiteSpaceOrEmpty(str) {
  var result = /^[\s\t\r\n]*$/.test(str);
  console.log("isWhiteSpaceOrEmpty: "+result+"9"+str+"9");
  return result;
}

function checkEmail(str) {
  console.log("checkEmail");
  return !/^[a-zA-Z_0-9\.]+@[a-zA-Z_0-9\.]+\.[a-zA-Z][a-zA-Z]+$/.test(str);
}

function checkStringAndFocus(obj, msg, fun) {
  let str = obj.value;
  console.log(str)
  let errorFieldName = "e_" + obj.name.substr(2, obj.name.length);
  if (fun(str)) {
    document.getElementById(errorFieldName).innerHTML = msg;
    obj.focus();
    return true;
  }
  else {
    document.getElementById(errorFieldName).innerHTML = "";
    return false;
  }
}

function validate(event) {
  event.preventDefault();
  const form = document.querySelector('form');
  return (
    checkStringAndFocus(form.elements["f_imie"], "Wprowadź imię!", isWhiteSpaceOrEmpty) ||
    checkStringAndFocus(form.elements["f_nazwisko"], "Wprowadź nazwisko!", isWhiteSpaceOrEmpty) ||
    checkStringAndFocus(form.elements["f_email"], "Wprowadź POPRAWNY email!", checkEmail) ||
    checkStringAndFocus(form.elements["f_kod"], "Wprowadź kod pocztowy", isWhiteSpaceOrEmpty) ||
    checkStringAndFocus(form.elements["f_ulica"], "Wprowadź ulicę", isWhiteSpaceOrEmpty) ||
    checkStringAndFocus(form.elements["f_miasto"], "Wprowadź miasto", isWhiteSpaceOrEmpty)
    );
  }
  
  function showElement(e) {
    document.getElementById(e).style.visibility = 'visible';
  }
  function hideElement(e) {
    document.getElementById(e).style.visibility = 'hidden';
  }
  
  function alterRows(i, e) {
    if (e) {
      if (i % 2 == 1) {
        e.setAttribute("style", "background-color: Aqua;");
      }
      e = e.nextSibling;
      while (e && e.nodeType != 1) {
        e = e.nextSibling;
      }
      alterRows(++i, e);
    }
  }
  
  function nextNode(e) {
    while (e && e.nodeType != 1) {
      e = e.nextSibling;
    }
    return e;
  }
  function prevNode(e) {
    while (e && e.nodeType != 1) {
      e = e.previousSibling;
    }
    return e;
  }
 function swapRows(b) {
   let tab = prevNode(b.previousSibling);
   let tBody = nextNode(tab.firstChild);
   let lastNode = prevNode(tBody.lastChild);
   tBody.removeChild(lastNode);
   let firstNode = nextNode(tBody.firstChild);
   tBody.insertBefore(lastNode, firstNode);
  }
  
  function cnt(form, msg, maxSize) {
    if (form.value.length > maxSize)
    form.value = form.value.substring(0, maxSize);
    else
    msg.innerHTML = maxSize - form.value.length;
  }