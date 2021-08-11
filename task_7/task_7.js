const btn = document.querySelector('.j-btn');
const inpt = document.querySelector('input');
const userInfo = document.getElementsByTagName('td');

btn.addEventListener('click', () => {
	const options = {
		method 'POST',
		body: JSON.stringify({
			"userId": 3,
			"id": 43,
			"title": "tempore ut sint quis recusandae",
			"completed": true

		});

		headers: {
			"Content-type": "application/json; charset=UTF-8"
		}
	}

	fetch('https://jsonplaceholder.typicode.com/users/3/todos', options)
	.then (response => response.json ())
});