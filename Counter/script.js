const buttons = document.querySelectorAll('.btn');
const value = document.querySelector('.value');

let count = 0;

buttons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const styles = e.currentTarget.classList;

    if (styles.contains('decrease')) count--;
    if (styles.contains('increase')) count++;
    if (styles.contains('reset')) count = 0
    if (count < 0) value.style.color = '#ff3a3a';
    if (count > 0) value.style.color = '#04ff04';
    if (count === 0) value.style.color = '#ffffff'

    value.innerHTML = count
  });
});