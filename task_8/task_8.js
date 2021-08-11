const page = document.querySelector('.page');
const limit = document.querySelector('.limit');
const btn = document.querySelector('.btn');

btn.addEventListener('click', sum);

function sum() {
  if (
    (page.value < 1 && limit.value < 1) ||
    (page.value > 10 && limit.value > 10) ||
    (isNaN(page.value) && isNaN(limit.value))
  ) {
    alert('Номер страницы и лимит вне диапазона от 1 до 10');
  } else if (page.value < 1 || page.value > 10 || isNaN(page.value)) {
    alert('Номер страницы вне диапазона от 1 до 10');
  } else if (limit.value < 1 || limit.value > 10 || isNaN(limit.value)) {
    alert('Лимит страницы вне диапазона от 1 до 10');
  } else {
    useRequest(
      `https://picsum.photos/v2/list?page=${page.value}&limit=${limit.value}`,
      displayResult,
    );
  }
}

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

const resultNode = document.querySelector('.result');

function displayResult(apiData) {
  let cards = '';

  apiData.forEach((item) => {
    const cardBlock = `
        <div class="card">
          <img
            src="${item.download_url}"
            class="card-image"
          />
          <p>${item.author}</p>
        </div>
      `;
    cards = cards + cardBlock;
  });

  resultNode.innerHTML = cards;
}
