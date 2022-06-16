const btnClickEl = document.getElementById('toggle-btn');
const enterNameEl = document.getElementById('user-name');
const spanNameEl = document.getElementById('text-hello');



btnClickEl.onclick = () => {
    let val = document.getElementById('user-name').value;
    console.log(val);
    btnClickEl.classList.toggle('hidden');
    enterNameEl.classList.toggle('hidden');
    spanNameEl.innerHTML = `Hello ${val}!`;
    spanNameEl.classList.toggle('visible');
};