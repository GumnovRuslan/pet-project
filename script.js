const logIn = document.querySelector('.profile__log')
const profilePhoto = document.querySelector('.profile__photo')
const settingMenu = document.querySelector('.profile__setting')

profilePhoto.style.display = 'none'
settingMenu.style.display = 'none'

logIn.addEventListener('click', comeIn)
profilePhoto.addEventListener('click', openSetting)

function comeIn() {
	profilePhoto.style.display = 'block'
	logIn.style.display = 'none'
}
function openSetting() {
	if (settingMenu.style.display == 'none') settingMenu.style.display = 'block'
	else settingMenu.style.display = 'none'
}
