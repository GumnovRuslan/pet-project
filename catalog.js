const catalog = document.querySelector('.catalog__content')
const catalogItem = catalog.querySelectorAll('.catalog__item')

num()

window.addEventListener('resize', num) //	Изменение экрана

function num(e) {
	for (let i = 0; i < catalogItem.length; i++) {
		let img = catalogItem[i].querySelector('img')
		let imgWidth = img.offsetWidth
		img.style.height = imgWidth / 0.749 + 'px'
	}
}

const filters = document.querySelector('.filters__inner')
const filterItem = filters.querySelectorAll('.filter')
console.log(filterItem)

function filter() {
	filters.addEventListener('click', (event) => {
		const filterTarget = event.target.dataset.f
		console.log(filterTarget)
		if (filterTarget == 'tag') getItems('tag')
		if (filterTarget == 'all') getItems('all')
	})
}

filter()

function getItems(dataset) {
	console.log(catalogItem)
	catalogItem.forEach((item) => {
		console.log(item.dataset.f)
		if (item.dataset.f == dataset) {
			item.style.display = 'block'
		} else {
			item.style.display = 'none'
		}
	})
}
