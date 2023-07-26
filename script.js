const logIn = document.querySelector('.profile__log')
const profilePhoto = document.querySelector('.profile__photo')
const settingMenu = document.querySelector('.profile__setting')
const links = document.querySelector('.profile__links')
const menu = document.querySelector('.setting__menu')
const exit = menu.querySelectorAll('.setting__link')[3]
const theme = menu.querySelectorAll('.setting__link')[2]
const checkbox = document.querySelector('.checkbox')
// console.log(checkbox)

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

const sliderLine = document.querySelector('.popular__inner')
let items = sliderLine.querySelectorAll('.popular__item')
const popular = document.querySelector('.popular')
const btnNext = document.querySelector('.next')
const btnLeft = document.querySelector('.left')

let slider = []
for (let i = 0; i < items.length; i++) {
	let src = items[i].querySelector('.item__img').src
	let author = items[i].querySelector('.item__country').textContent
	let name = items[i].querySelector('.item__name').textContent
	slider[i] = {src: src, author: author, name: name}
	items[i].remove()
}
console.log(slider)

let offset = 0
let step = 3
let step1 = 0

function draw() {
	let slide = document.createElement('div')
	slide.classList.add('popular__item')

	let img = document.createElement('img')
	img.classList.add('item__img')
	img.src = slider[step1].src

	let bottom = document.createElement('div')
	bottom.classList.add('item__bottom')

	let author = document.createElement('p')
	author.classList.add('item__country')
	author.textContent = slider[step1].author

	let name = document.createElement('h4')
	name.classList.add('item__name')
	name.textContent = slider[step1].name

	sliderLine.append(slide)
	slide.append(img)
	slide.append(bottom)
	bottom.append(author)
	bottom.append(name)
	slide.style.right = offset * 165 + 'px'

	if (step1 + 1 == slider.length) {
		step1 = 0
	} else {
		step1++
	}
	offset = 1
}

function changeRight() {
	let items = document.querySelectorAll('.popular__item')
	// let offset2 = 0
	// for (let i = 0; i < items.length; i++) {
	// 	items[i].style.right = offset2 * 165 - 165 + 'px'
	// 	offset2++
	// }
	setTimeout(() => {
		items[0].remove()
		items[1].remove()
		items[2].remove()
	}, 1000)

	draw()
	draw()
	draw()
	offset += 165 * step
	sliderLine.style.right = offset + 'px'
}

const windowInnerWidth = window.innerWidth
console.log(windowInnerWidth)
let size = 0

for (let i = size; i < windowInnerWidth; i += 165) {
	draw()
}

// let timerId = setInterval(changeRight, 3000)

btnNext.addEventListener('click', changeRight)
btnLeft.addEventListener('click', changeLeft)

function changeLeft() {
	offset -= 165 * step
	sliderLine.style.right = offset + 'px'
}
