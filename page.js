const tabsContainer = document.querySelector('.book__body')
const tabs = tabsContainer.querySelectorAll('.tab__btn')
const tabContents = tabsContainer.querySelectorAll('.tab-content')

tabsContainer.addEventListener('click', (e) => {
	if (e.target.className == 'tab__btn') {
		for (let i = 0; i < tabs.length; i++) {
			if (tabs[i] == e.target) {
				e.target.classList.add('tab-active')
				tabContents[i].style.display = 'block'
			} else {
				tabs[i].classList.remove('tab-active')
				tabContents[i].style.display = 'none'
			}
		}
	}
})

const reveal = tabsContainer.querySelector('.read-more')

reveal.addEventListener('click', (e) => {
	const contentBody = document.querySelector('.book__body')
	const description = tabsContainer.querySelector('.book__description')
	description.style.height = '100%'
	contentBody.style.padding = '0'
	e.target.style.display = 'none'
})

// const textArea = document.querySelector('.comment__input')

// COMMENTS
const commentsUrl = 'https://jsonplaceholder.typicode.com/comments'
// let commentsArr = []

const comments = document.querySelector('.comments__inner')

function draw(user, comment, mail) {
	let comItem = document.createElement('div')
	comItem.classList.add('comment__item')

	let comUser = document.createElement('p')
	comUser.classList.add('comment__user')
	comUser.textContent = user

	let email = document.createElement('p')
	email.classList.add('comment__email')
	email.textContent = mail

	let comBody = document.createElement('p')
	comBody.classList.add('comment__body')
	comBody.textContent = comment

	comments.append(comItem)
	comItem.append(comUser)
	comItem.append(email)
	comItem.append(comBody)
}

function com(e) {
	if (comments.querySelectorAll('.comment__item').length < 10) {
		fetch(commentsUrl)
			.then((response) => response.json())
			.then((commits) => (commentsArr = commits.slice(0)))
			.then((res) => {
				for (let i = 0; i < 10; i++) {
					draw(res[i].name, res[i].body, res[i].email)
				}
			})
	}

	if ((comments.style.display = 'none')) comments.style.display = 'flex'
	this.style.display = 'none'
}

const btn = document.querySelector('.comments__show')
btn.addEventListener('click', com)
