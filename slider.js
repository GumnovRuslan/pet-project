const sliderLine = document.querySelector('.slider__line')
let items = sliderLine.querySelectorAll('.slider__item')
const popular = document.querySelector('.popular')

let slider = []
let offset = 0
let step = 0

for (let i = 0; i < items.length; i++) {
	let src = items[i].querySelector('.item__img').src
	let href = items[i].querySelector('.item__link').href
	let author = items[i].querySelector('.item__country').textContent
	let name = items[i].querySelector('.item__name').textContent

	slider[i] = {src: src, author: author, name: name, href: href}
	items[i].remove()
}

function draw() {
	let slide = document.createElement('div')
	slide.classList.add('slider__item')

	let link = document.createElement('a')
	link.classList.add('item__link')
	link.href = slider[step].href

	let img = document.createElement('img')
	img.classList.add('item__img')
	img.src = slider[step].src

	let bottom = document.createElement('div')
	bottom.classList.add('item__bottom')

	let author = document.createElement('p')
	author.classList.add('item__country')
	author.textContent = slider[step].author

	let name = document.createElement('h4')
	name.classList.add('item__name')
	name.textContent = slider[step].name

	sliderLine.append(slide)
	slide.append(link)
	link.append(img)
	link.append(bottom)
	bottom.append(author)
	bottom.append(name)

	if (offset >= containerSize) offset--
	slide.style.left = offset * 165 + 'px'
	offset += 1

	if (step + 1 == slider.length) step = 0
	else step += 1
}

function moveRight() {
	let items2 = document.querySelectorAll('.slider__item')

	for (let i = 0; i < items2.length; i++)
		items2[i].style.left = i * 165 - 165 + 'px'

	setTimeout(() => {
		items2[0].remove()
		draw()
	}, 500)
}

const main = document.querySelector('.main')
const container = main.querySelector('.container')
const containerWidth = container.clientWidth
let containerSize = Math.ceil(containerWidth / 165) + 1 // 1 привязать к шагу

for (let i = 0; i < containerSize; i++) draw() //	заполнение экрана слайдами

window.addEventListener('resize', num) //	Изменение экрана
function num() {}

let timerId = setInterval(moveRight, 3000)
sliderLine.addEventListener('mouseover', () => clearInterval(timerId))
sliderLine.addEventListener(
	'mouseout',
	() => (timerId = setInterval(moveRight, 3000))
)
