let fInner = document.querySelector('.footer__inner')
let block = fInner.querySelectorAll('.footer__list')

for (let i = 0; i < block.length; i++) {
	block[i]
		.querySelector('.footer__block-header')
		.addEventListener('click', openList)
}

function openList() {
	const block = this.closest('.footer__list')
	const header = this
	const listBody = block.querySelector('.footer__block-body')
	const listImg = block.querySelector('.footer__title-img')

	if (!listBody.style.display) {
		listBody.style.cssText = `display: flex;`
		listImg.style.transform = 'rotate(180deg)'
		header.style.cssText = `background: #000;`
	} else {
		listBody.style.display = ''
		listImg.style.transform = 'rotate(0deg)'
		header.style.cssText = `background: transparent;`
	}
}
