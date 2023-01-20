const mostrar = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach((item) =>{
    item.onclick = () => {
        if (item.id == 'clear'){
            mostrar.innerText = '';
        }else if (item.id == 'backspace'){
            let cadena = mostrar.innerText.toString();
            mostrar.innerText = cadena.substring(0, cadena.length - 1);
        }else if (mostrar.innerText != '' && item.id == 'equal'){
            mostrar.innerText = eval(mostrar.innerText);
        }else if(mostrar.innerText == '' && item.id == 'equal'){
            mostrar.innerText = '¡Vacio!';
            setTimeout(() => (mostrar.innerText = ''),2000);
        }else{
            mostrar.innerText += item.id;
        }
    }
})

const themeToggleBtn = document.querySelector('.theme-toggler');
const calculadora = document.querySelector('.calculator');
const bgDark = document.querySelector('.bg-dark');
const toggleIcon = document.querySelector('.toggler-icon');
let isDark = true;
themeToggleBtn.onclick = () => {
    calculadora.classList.toggle('dark');
    bgDark.classList.toggle('bg-dark')
    themeToggleBtn.classList.toggle('active');
    isDark  = !isDark;
}