let fInner = document.querySelector('.footer__inner')
let block = fInner.querySelectorAll('.footer__list')

for (let i = 0; i < block.length; i++) {
	block[i].addEventListener('click', openList)
}

function openList() {
	const listBody = this.querySelector('.footer__block-body')
	const listImg = this.querySelector('.footer__title-img')

	listBody.style.cssText = `display: flex;`
	listImg.style.transform = 'rotate(180deg)'
}
