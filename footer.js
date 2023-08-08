let fInner = document.querySelector('.footer__inner')
let block = fInner.querySelectorAll('.footer__list')

for (let i = 0; i < block.length; i++) {
	block[i]
		.querySelector('.footer__block-header')
		.addEventListener('click', openList)
}

function openList() {
	const block = this.closest('.footer__list')
	const listBody = block.querySelector('.footer__block-body')
	const listImg = block.querySelector('.footer__title-img')

	let body = document.body,
		html = document.documentElement

	let height = Math.max(
		body.scrollHeight,
		body.offsetHeight,
		html.clientHeight,
		html.scrollHeight,
		html.offsetHeight
	)

	if (!listBody.style.display) {
		listBody.style.cssText = `display: flex;`
		listImg.style.transform = 'rotate(180deg)'
		this.style.cssText = `background: #000;`
		window.scrollTo({
			top: height,
			left: 0,
			behavior: 'smooth'
		})
	} else {
		listBody.style.display = ''
		listImg.style.transform = 'rotate(0deg)'
		this.style.cssText = `background: transparent;`
	}
}
