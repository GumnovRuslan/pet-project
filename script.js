const logIn = document.querySelector('.profile__log')
const profilePhoto = document.querySelector('.profile__photo')
const settingMenu = document.querySelector('.profile__setting')
const links = document.querySelector('.profile__links')
const menu = document.querySelector('.setting__menu')
const exit = menu.querySelectorAll('.setting__link')[3]
console.log(exit)

profilePhoto.style.display = 'none'
settingMenu.style.display = 'none'
links.style.display = 'none'

logIn.addEventListener('click', comeIn)
profilePhoto.addEventListener('click', openSetting)
exit.addEventListener('click', leave)

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
