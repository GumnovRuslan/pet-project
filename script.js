const logIn = document.querySelector('.profile__log')
const profilePhoto = document.querySelector('.profile__photo')
const settingMenu = document.querySelector('.profile__setting')
const links = document.querySelector('.profile__links')
const menu = document.querySelector('.setting__menu')
const exit = menu.querySelectorAll('.setting__link')[3]
const theme = menu.querySelectorAll('.setting__link')[2]
const checkbox = document.querySelector('.checkbox')

profilePhoto.style.display = 'none'
settingMenu.style.display = 'none'
links.style.display = 'none'

logIn.addEventListener('click', comeIn)
profilePhoto.addEventListener('click', openSetting)
exit.addEventListener('click', leave)
theme.addEventListener('click', changeTheme)

function comeIn() {
	profilePhoto.style.display = 'block'
	logIn.style.display = 'none'
	links.style.display = 'flex'
}

function openSetting() {
	if (settingMenu.style.display == 'none') settingMenu.style.display = 'block'
	else settingMenu.style.display = 'none'
}

function leave() {
	settingMenu.style.display = 'none'
	profilePhoto.style.display = 'none'
	links.style.display = 'none'
	logIn.style.display = 'block'
}

function changeTheme() {
	if (checkbox.checked) checkbox.checked = false
	else checkbox.checked = true
}

// BTN-UP

const btnUp = {
	el: document.querySelector('.btn-up'),
	show() {
		this.el.classList.remove('btn-up__hide')
	},
	hide() {
		this.el.classList.add('btn-up__hide')
	},
	addEventListener() {
		// при прокрутке содержимого страницы
		window.addEventListener('scroll', () => {
			// определяем величину прокрутки
			const scrollY = window.scrollY || document.documentElement.scrollTop
			// если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
			scrollY > 100 ? this.show() : this.hide()
		})
		// при нажатии на кнопку .btn-up
		document.querySelector('.btn-up').addEventListener('click', () => {
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: 'smooth'
			})
		})
	}
}

btnUp.addEventListener()
