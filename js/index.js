const form = document.getElementById('form');
const inputButton = document.querySelector('.button');

inputButton.addEventListener('click', event => valid(form));

function valid(form) {
  let fail = false;
  let name = form.children[0].value;
  const pass = 123456789;

  if(pass != name) fail = "Write you correct ID";
  if(fail) alert(fail);
  else window.location = "qwerxcgdfbxcqw42342.html";

}
