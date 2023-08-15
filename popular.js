const container = document.querySelector('.items__container')

// container.addEventListener('load', draw)
drawBook()
function drawBook() {
	let books = JSON.parse(localStorage.newBooks)
	container.innerHTML = books
		.map((item, index) => {
			return `<div class='item'>
                        <a href='#${index}' class='item__link'>
                            <div class='item__image'>
                                <img src='${item.src}' alt='' class='item__img'>
                            </div>
                            <div class='item__bottom'>
                                <p class='item__country'>${item.author}</p>
                                <h4 class='item__name'>${item.name}</h4>
                            </div>
                        </a>
					</div>`
		})
		.join('')
	num()
}

window.addEventListener('resize', num) //	Изменение экрана

function num() {
	const catalogItem = container.querySelectorAll('.item')
	for (let i = 0; i < catalogItem.length; i++) {
		let img = catalogItem[i].querySelector('img')
		let imgWidth = img.offsetWidth
		img.style.height = imgWidth / 0.749 + 'px'
	}
}
