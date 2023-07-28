const catalog = document.querySelector('.catalog__content')
const catalogItem = catalog.querySelectorAll('.catalog__item')

window.addEventListener('resize', num) //	Изменение экрана
function num(e) {
	for (let i = 0; i < catalogItem.length; i++) {
		let img = catalogItem[i].querySelector('img')
		let imgWidth = img.offsetWidth
		img.style.height = imgWidth / 0.749 + 'px'
	}
}
