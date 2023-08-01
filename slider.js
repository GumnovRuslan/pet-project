function slider(sliderName, time, side, widthSlide) {
	const sliderLine = sliderName.querySelector('.slider__line')
	let items = sliderLine.querySelectorAll('.slider__item')

	let slider = []
	let offset = 0
	let step = 0

	for (let i = 0; i < items.length; i++) {
		let src = items[i].querySelector('.item__img').src
		let href = items[i].querySelector('.item__link').href
		let author = items[i].querySelector('.item__country').textContent
		let name = items[i].querySelector('.item__name').textContent

		slider[i] = {
			src: src,
			author: author,
			name: name,
			href: href
		}

		items[i].remove()
	}

	function draw() {
		let slide = document.createElement('div')
		slide.classList.add('slider__item')

		let link = document.createElement('a')
		link.classList.add('item__link')
		link.href = slider[step].href

		let image = document.createElement('div')
		image.classList.add('item__image')

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

		if (side === 'left') sliderLine.append(slide)
		if (side === 'right') sliderLine.prepend(slide)

		slide.append(link)
		link.append(image)
		image.append(img)
		link.append(bottom)
		bottom.append(author)
		bottom.append(name)

		if (offset >= sliderSize) offset--
		if (side === 'left') slide.style.left = offset * widthSlide + 'px'
		if (side === 'right') slide.style.right = offset * widthSlide + 'px'
		offset += 1

		if (step + 1 == slider.length) step = 0
		else step += 1
	}

	function move() {
		let items2 = sliderName.querySelectorAll('.slider__item')

		for (let i = 0; i < items2.length; i++) {
			if (side === 'left')
				items2[i].style.left =
					parseInt(items2[i].style.left) - widthSlide + 'px'
			if (side === 'right')
				items2[i].style.right =
					parseInt(items2[i].style.right) - widthSlide + 'px'
		}

		setTimeout(() => {
			if (side === 'left') items2[0].remove()
			if (side === 'right') items2[items2.length - 1].remove()
			draw()
		}, 500)
	}

	const sliderWidth = sliderName.clientWidth
	let sliderSize = Math.ceil(sliderWidth / widthSlide) + 1 // 1 привязать к шагу

	for (let i = 0; i < sliderSize; i++) draw() //	заполнение экрана слайдами

	window.addEventListener('resize', num) //	Изменение экрана
	function num() {}

	let timerId = setInterval(move, time)
	sliderLine.addEventListener('mouseover', () => clearInterval(timerId))
	sliderLine.addEventListener(
		'mouseout',
		() => (timerId = setInterval(move, time))
	)
	//==================================================
	// скролл мышкой
	let speed = 1 // Скорость скролла.

	let scroll = sliderName.querySelector('.slider__line')

	let left = 0 // отпустили мышку - сохраняем положение скролла
	let drag = false
	let coorX = 0 // нажали мышку - сохраняем координаты.

	scroll.addEventListener('pointerdown', function (e) {
		drag = true
		coorX = e.pageX - this.offsetLeft
	})
	document.addEventListener('pointerup', function () {
		drag = false
		left = scroll.scrollLeft
	})
	scroll.addEventListener('pointermove', function (e) {
		if (drag) {
			this.scrollLeft = left - (e.pageX - this.offsetLeft - coorX) * speed
		}
	})
	scroll.ondragstart = () => {
		return false
	}
}

slider(sliderPopular, 5000, 'left', 165)
slider(sliderNovelties, 5000, 'right', 165)
