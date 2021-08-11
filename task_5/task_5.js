let nameUser = '';
let dataSession = '';

//получаем данные по ключу
let myNameUser = localStorage.getItem('myNameUser');
let myDataSession = localStorage.getItem('myDataSession');

function checkSession(a) {
  if (a == false) {
    nameUser = prompt('Добро пожаловать! Назовите, пожалуйста, ваше имя');
    dataSession = new Date();
    //ключ значение
    localStorage.setItem('myNameUser', `${nameUser}`);
    localStorage.setItem('myDataSession', `${dataSession}`);
  } else {
    alert(
      `Добрый день, ${myNameUser} Давно не виделись. В последний раз вы были у нас ${myDataSession}`,
    );
    dataSession = new Date();
    localStorage.setItem('myDataSession', `${dataSession}`);
  }
}

console.log('имя', myNameUser);
console.log('дата', myDataSession);
window.onload = checkSession(myNameUser); //вызываем функцию при открытии страницы
