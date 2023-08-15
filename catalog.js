const catalog = document.querySelector('.items__container')
const catalogItem = catalog.querySelectorAll('.item')

num()

window.addEventListener('resize', num) //	Изменение экрана

function num() {
	for (let i = 0; i < catalogItem.length; i++) {
		let img = catalogItem[i].querySelector('img')
		let imgWidth = img.offsetWidth
		img.style.height = imgWidth / 0.749 + 'px'
	}
}

const filters = document.querySelector('.filters__list')
const filterItem = filters.querySelectorAll('.list__item')

const fBlock = document.querySelectorAll('.filter__block')
for (i of fBlock) {
	i.addEventListener('click', checked)
}

function checked(e) {
	e.stopPropagation()
	let target = e.target.closest('LABEL')

	if (!!target) {
		if (target.dataset.filtertype >= 2) target.dataset.filtertype = 0
		else target.dataset.filtertype++
		let num = target.dataset.filtertype
		drawCheckbox(num, target)
	}
}

function drawCheckbox(num, block) {
	let checkbox = block.querySelector('.filter__checkbox')
	let line = block.querySelectorAll('.filter__checkbox-line')
	let shadow = block.querySelector('.filter__checkbox-shadow')

	if (num == 0) {
		checkbox.style.cssText = `background: #000;
		border-color: #fff`

		for (i of line) i.style.cssText = `display: none`
		shadow.style.cssText = `background: white;`
	} else if (num == 1) {
		checkbox.style.cssText = `background: #4caf50; border-color: #4caf50`
		shadow.style.cssText = `background: inherit;`
		line[0].style.cssText = `
			transform: rotate(45deg);
			left: calc(50% - 6.4px);
			top: calc(50% + 1.2px);
			display: block;`
		line[1].style.cssText = `
			transform: rotate(-45deg);
			left: calc(50% - 3.8px);
			top: calc(50% - 0.5px);
			display: block;`
	} else if (num == 2) {
		checkbox.style.cssText = `background: #f44336; border-color: #f44336`
		shadow.style.cssText = `background: inherit;`
		line[0].style.cssText = `left: calc(50% - 6px);
			top: calc(50% - 0.75px);
			transform: rotate(0);
			display: block;`
		line[1].style.cssText = `left: calc(50% - 6px);
			top: calc(50% - 0.75px);
			transform: rotate(0);
			display: block;`
	}
}

let filterSection = document.querySelectorAll('.list__item')
let toolsClose = document.querySelectorAll('.filter__close')

for (let i = 0; i < filterSection.length; i++) {
	filterSection[i].addEventListener('click', openFilter)
}

function openFilter() {
	let filterBlock = this.querySelector('.filter__block')
	let filterClose = filterBlock.querySelector('.filter__close')
	let filterReset = filterBlock.querySelector('.filter__reset')

	filterBlock.style.cssText = `left: 0; visibility: visible; opacity: 1`

	filterClose.addEventListener('click', (e) => {
		e.stopPropagation()
		filterBlock.style.cssText = `left: 100%`
	})

	filterReset.addEventListener('click', (e) => {
		e.stopPropagation()
		let filters = filterBlock.querySelectorAll('.filter__text')
		for (filter of filters) {
			filter.dataset.filtertype = 0
			drawCheckbox(0, filter)
		}
	})
}

// RESET ALL FILTERS
const resetAll = document.querySelector('.filter__reset-all')

resetAll.addEventListener('click', () => {
	let filters = document.querySelectorAll('.filter__text')
	for (filter of filters) {
		i.dataset.filtertype = 0
		drawCheckbox(0, filter)
	}
})
