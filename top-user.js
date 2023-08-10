const topUser = document.querySelectorAll('.top-user')

for (let i = 0; i < topUser.length; i++) {
	const userExp = topUser[i].querySelector('.top-user__exp')
	const progressBar = topUser[i].querySelector('.top-user__progress-bar')
	const userPosition = topUser[i].querySelector('.top-user__position')
	const userLvl = topUser[i].querySelector('.top-user__lvl-num').textContent

	let maxExp = userLvl * 100 * 2.64

	progressBar.style.width =
		Math.floor(userExp.textContent / (maxExp / 100)) + '%'
	userExp.textContent = `${userExp.textContent} / ${maxExp}`
	userPosition.textContent = '#' + (i + 1)
}

// SCROLL BLOCK TOP-USER
;(function scroll() {
	let speed = 1 // Скорость скролла.

	let scroll = document.querySelector('.top-users__container')
	let users = scroll.querySelectorAll('.top-user')

	let left = 0 // отпустили мышку - сохраняем положение скролла
	let drag = false
	let coorX = 0 // нажали мышку - сохраняем координаты.

	scroll.addEventListener('pointerdown', function (e) {
		for (i of users) i.style.animationPlayState = 'paused'
		drag = true
		coorX = e.pageX - this.offsetLeft
		scroll.setPointerCapture(e.pointerId)
	})
	scroll.addEventListener('pointerup', function () {
		for (i of users) i.style.animationPlayState = 'running'
		drag = false
		left = scroll.scrollLeft
	})
	scroll.addEventListener('pointermove', function (e) {
		if (drag) {
			this.scrollLeft = left - (e.pageX - this.offsetLeft - coorX) * speed
		}
	})
	scroll.ondragstart = () => false
})()
