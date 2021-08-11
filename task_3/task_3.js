const selectValue = document.querySelector('.select_value'); //выбор года
const button = document.querySelector('.button'); //загрузить отчет
const resultValue = document.querySelector('.result_value'); // вывод отчета на экран
let valueAge;

button.addEventListener('click', () => {
  useRequest('https://my.api.mockaroo.com/revenue_2017-2019.json?key=fd36b440', displayResult);
});

selectValue.addEventListener('change', (event) => {
  valueAge = `${event.target.value}`;
});

function useRequest(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);

  xhr.onload = function () {
    if (xhr.status != 200) {
      console.log('Статус ответа: ', xhr.status);
    } else {
      const result = JSON.parse(xhr.response);
      if (callback) {
        callback(result);
      }
    }
  };
  xhr.onerror = function () {
    console.log('Ошибка! Статус ответа: ', xhr.status);
  };

  xhr.send();
}

function displayResult(apiData) {
  let cards = '';
  let warn = '';
  apiData.forEach((item) => {
    if (valueAge === `${item.year}`) {
      const cardBlock = `
        <div>${item.sales.q1}</div>
        <div>${item.sales.q2}</div>
        <div>${item.sales.q3}</div>
        <div>${item.sales.q4}</div>
        <a href="https://quickchart.io/chart?c={type:'bar',data:{labels:['Кв.1','Кв.2','Кв.3','Кв.4'], datasets:[{label:'Выручка за ${item.year} год',data:[${item.sales.q1},${item.sales.q2},${item.sales.q3},${item.sales.q4}]}]}}" target="_blank">Открыть график</a>
        `;
      cards = cards + cardBlock;
      resultValue.innerHTML = cards;
    }
    if (valueAge == 'def') {
      const warnBlock = `<p class="warn">ВЫБЕРИТЕ ЗНАЧЕНИЕ ИЗ СПИСКА!!!</p>`;

      warn = cards + warnBlock;
      resultValue.innerHTML = warn;
      console.log('>????');
    }
  });
}
