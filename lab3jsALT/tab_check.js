let table = document.querySelector("#tabelka");
let tbody = table.getElementsByTagName('tbody')[0]
let rows = document.getElementsByTagName("tr");

function removeRow(element){
  console.log(element);
  tbody.removeChild(element.parentElement.parentElement);
}
function editRow(){}
// tbody.addEventListener("click", function(e) {
//   console.log(e);
//   if (e.detail === 2) {
//     let col1 = e.target.parentElement.querySelector(".col1");
//     let col2 = e.target.parentElement.querySelector(".col2");
//     console.log(col1.value)
//     col1.innerHTML = "<input type='text'>";
//     col2.innerHTML = "<input type='text'>";
//   } else if (e.detail === 1) {
//     tbody.removeChild(e.target.parentElement);
//   }
// })


