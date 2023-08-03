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
