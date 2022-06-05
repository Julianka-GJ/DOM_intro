const btnClick = document.getElementById('toggle-btn');
const enterName = document.getElementById('user-name');
const inputName = document.getElementById('text-hello');



btnClick.onclick = () => {
    let val = document.getElementById('user-name').value;
    console.log(val);
    btnClick.classList.toggle('hidden');
    enterName.classList.toggle('hidden');
    inputName.innerHTML = `Hello ${val}!`;
    inputName.classList.toggle('visible');
};