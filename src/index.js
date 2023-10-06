document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('form')
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    buildToDo(form, form.querySelector('#new-task-description').value)
    form.reset()
  });
});

function buildToDo(form, todo) {
  let p = document.createElement('p')
  let btn = document.createElement('button')
  let dropDown = document.createElement('datalist')
  form.appendChild(dropDown)
  form.querySelector('#new-task-description').addEventListener('click', (e) => dropList(e))
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'x'
  p.textContent = `${todo} `
  document.querySelector('#tasks').appendChild(p)
  p.appendChild(btn)
}

function handleDelete(e) {
  e.target.parentNode.remove()
}

function dropList(dropDown) {
  let option1 = document.createElement('option');
  option1.value= 'Work';
  let option2 = document.createElement('option');
  option2.value = 'Cook';
  let option3 = document.createElement('option');
  option3.value = 'Clean'
  dropDown.appendChild(option1);
  dropDown.appendChild(option2);
  dropDown.appendChild(option3);
  console.log(dropDown);
}